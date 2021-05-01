import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import {firestore, timestamp} from '../firebase/firebase'
import './Quicknote.css'

const replaceHtmlRegex = /(<([^>]+)>)/ig

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
                    navigator.clipboard.writeText(`http://${window.location.hostname}:${window.location.port}/${res.path}`)
                    alert(`Shareable Link Copied to Your Clipboard\n\nhttp://${window.location.hostname}:${window.location.port}/${res.path}
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
                        <Button onClick={this.handleTextCopy} color="secondary" variant="contained" size="large"><strong>Copy to Clipboard</strong></Button>
                        <Button onClick={this.handleTextLink} color="secondary" variant="contained" size="large"><strong>Generate Link</strong></Button>
                    </div>
                    <ReactQuill theme="snow" value={quillText} onChange={this.handleQuillTextChange} />
                </div>
            </div>
        )
    }
}

export default Quicknote