import React, { Component } from 'react'
import ReactQuill from 'react-quill'
import Button from '@material-ui/core/Button'
import { firestore, timestamp } from '../firebase/firebase'
import 'react-quill/dist/quill.snow.css'
import './modal.css'

const replaceHtmlRegex = /(<([^>]+)>)/ig

class Modal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quillText: null,
        }

        this.handleModalCloseClick = this.handleModalCloseClick.bind(this)
        this.handleQuillTextChange = this.handleQuillTextChange.bind(this)
        this.handleButtonClick = this.handleButtonClick.bind(this)
    }

    handleModalCloseClick(evt) {
        this.props.closeModal(evt)
    }

    handleQuillTextChange(value) {
        this.setState({ quillText: value })
    }

    handleButtonClick(evt) {
        const buttonId = evt.currentTarget.getAttribute("id")
        if(buttonId==="copy") {
            navigator.clipboard.writeText(this.state.quillText)
            alert(`Note Text Copied to Clipboard`)
        }
        else if(buttonId==="download") {
            console.log("Donwloading the Text Now")
        }
        else if(buttonId==="save") {
            const singelPageNotesCollection = firestore.collection('singlepagenotes')
            const text = this.state.quillText.replace(replaceHtmlRegex, "")
            singelPageNotesCollection.add({ text, createdAt: timestamp() })
            .then((res) => {
                this.setState({ quillText: null }, () => {
                    navigator.clipboard.writeText(`http://${window.location.hostname}:${window.location.port}/${res.path}`)
                    alert(`Note Saved and Link Copied to Your Clipboard\n\nhttp://${window.location.hostname}:${window.location.port}/${res.path}`)
                })
            })
            .catch((err) => {
                console.log("SOME ERROR OCCURRED")
                console.log(err)
            })
        }
    }

    render() {
        return(
            <div className="modal-display">
                <div onClick={this.handleModalCloseClick} className="main-modal row">
                    <div className="modal-box row">
                        <div className="finbox col col-12">
                            <ReactQuill theme="snow" value={this.state.quillText} onChange={this.handleQuillTextChange} />
                            <div className="modal-btn">
                                <Button onClick={this.handleButtonClick} id="copy" color="primary" size="large" variant="contained">Copy Note</Button>
                                <Button onClick={this.handleButtonClick} id="download" color="primary" size="large" variant="contained">Download Note</Button>
                                <Button onClick={this.handleButtonClick} id="save" color="primary" size="large" variant="contained">Save Note</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Modal