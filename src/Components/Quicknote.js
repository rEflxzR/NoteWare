import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import { styled } from '@material-ui/core/styles';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import {firestore, timestamp} from '../firebase/firebase'
import './Quicknote.css'

const replaceHtmlRegex = /(<([^>]+)>)/ig
const StyledButton = styled(Button)({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    color: 'white'
})

class Quicknote extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quillText: "",
            currentLink: ""
        }

        this.handleQuillTextChange = this.handleQuillTextChange.bind(this)
        this.handleTextCopy = this.handleTextCopy.bind(this)
        this.handleTextLink = this.handleTextLink.bind(this)
    }

    handleQuillTextChange(value) {
        this.setState({ quillText: value })
    }

    handleTextCopy() {
        const text = this.state.quillText.replace(replaceHtmlRegex, "")
        navigator.clipboard.writeText(text)
    }

    handleTextLink() {
        if(this.state.quillText==="") {
            alert("Text Cannot Be Empty")
        }
        else {
            const quickNotesCollection = firestore.collection('quicknotes')
            const text = this.state.quillText.replace(replaceHtmlRegex, "")
            quickNotesCollection.add({ text, createdAt: timestamp() })
            .then((res) => {
                this.setState({ quillText: "" }, () => {
                    navigator.clipboard.writeText(`${window.location.href}${res.path}`)
                    alert(`Shareable Link Copied to Your Clipboard\n\n${window.location.href}${res.path}
                `)
                })
            })
            .catch((err) => {
                console.log("SOME ERROR OCCURRED")
                console.log(err)
            })
        }
    }

    render() {
        const { quillText } = this.state

        return (
            <div className="quicknote-box">
                <div>
                    <div id="quill-buttons">
                        <StyledButton onClick={this.handleTextCopy} color="secondary" variant="contained" size="large"><strong>Copy to Clipboard</strong></StyledButton>
                        <StyledButton onClick={this.handleTextLink} color="secondary" variant="contained" size="large"><strong>Generate Link</strong></StyledButton>
                    </div>
                    <ReactQuill theme="snow" value={quillText} onChange={this.handleQuillTextChange} />
                </div>
            </div>
        )
    }
}

export default Quicknote