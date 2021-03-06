import React, { Component } from 'react'
import ReactQuill from 'react-quill'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { styled } from '@material-ui/core/styles'
import { firestore, timestamp } from '../firebase/firebase'
import 'react-quill/dist/quill.snow.css'
import './modal.css'


const htmlregex = /(<([^>]+)>)/ig

const StyledButton = styled(Button)({
    color: 'white',
    backgroundColor: '#9c27b0',
    '&:hover': {
      backgroundColor: '#b72dcf',
    },
})

class Modal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ...props.info[0]
        }

        this.handleModalCloseClick = this.handleModalCloseClick.bind(this)
        this.handleQuillTextChange = this.handleQuillTextChange.bind(this)
        this.handleButtonClick = this.handleButtonClick.bind(this)
        this.handleTitleChange = this.handleTitleChange.bind(this)
    }

    handleModalCloseClick(evt) {
        this.props.closeModal(evt)
    }

    handleTitleChange(evt) {
        this.setState({ title: evt.currentTarget.value })
    }

    handleQuillTextChange(value) {
        this.setState({ text: value })
    }

    handleButtonClick(evt) {
        if(this.state.text==="" || this.state.title==="") {
            alert("Note Title and Text Cannot Be Empty")
        }
        else {
            const buttonId = evt.currentTarget.getAttribute("id")
            if(buttonId==="copy") {
                navigator.clipboard.writeText(this.state.text.replace(htmlregex, ""))
                alert(`Note Text Copied to Clipboard`)
            }
            else if(buttonId==="download") {
                const element = document.createElement("a")
                const file = new Blob([`${this.state.title}\n\n${this.state.text.replace(htmlregex, " ")}`], 
                {type: 'text/plain;charset=utf-8'})
                
                element.href = URL.createObjectURL(file)
                element.download = "NoteWare Text.txt"
                document.body.appendChild(element)
                element.click()
            }
            else if(buttonId==="save") {
                const singelPageNotesCollection = firestore.collection('singlepagenotes')
                const text = this.state.text
                const title = this.state.title
                const noteId = this.state.id

                if(noteId) {
                    singelPageNotesCollection.doc(noteId).update({ title, text })
                    .then((res) => {
                        alert("Note Updated")
                    })
                    .catch((err) => {
                        console.log("SOME ERROR OCCURRED")
                        console.log(err)
                    })
                }
                else {
                    singelPageNotesCollection.add({ title, text, createdAt: timestamp() })
                    .then((res) => {
                        this.setState({ text: "", title: "" }, () => {
                            navigator.clipboard.writeText(`${window.location.href}${res.path}`)
                            alert(`Note Saved and Link Copied to Your Clipboard\n\n${window.location.href}${res.path}`)
                        })
                    })
                    .catch((err) => {
                        console.log("SOME ERROR OCCURRED")
                        console.log(err)
                    })
                }
            }

            else {
                navigator.clipboard.writeText(`${window.location.href}singlepagenotes/${this.state.id}`)
                alert(`Note Link Copied to Clipboard\n\n${window.location.href}singlepagenotes/${this.state.id}`)
            }
        }
    }

    render() {
        const { title, text, id } = this.state

        if(this.props.modalType==="read") {
            const displayText = text.replace(htmlregex, " ")
            return (
                <div className="modal-display">
                    <div onClick={this.handleModalCloseClick} className="main-modal row">
                        <div onClick={this.handleModalCloseClick} className="modal-box row">
                            <div onClick={this.handleModalCloseClick} className="readbox col col-12">

                                <div className="content-card">
                                    <div className="card-big-shadow">
                                        <div className="card card-just-text" data-background="color" data-color="yellow" data-radius="none">
                                            <div className="content">
                                                <h1 className="mb-3 category text-dark"><strong>{title}</strong></h1>
                                                <h5 className="description text-dark">{displayText}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            )
        }

        return(
            <div className="modal-display">
                <div onClick={this.handleModalCloseClick} className="main-modal row">
                    <div className="modal-box row">
                        <div className="editbox col col-12">
                            <div className="modal-title">
                                <TextField onChange={this.handleTitleChange} value={this.state.title} className="note-title" label="Enter A Note Title" />
                            </div>
                            <ReactQuill theme="snow" value={this.state.text} onChange={this.handleQuillTextChange} />
                            <div className="modal-btn">
                                { id ? (<StyledButton onClick={this.handleButtonClick} id="link" color="secondary" size="large" variant="contained"><strong>Copy Link</strong></StyledButton>) :
                                    (<StyledButton onClick={this.handleButtonClick} id="copy" color="secondary" size="large" variant="contained"><strong>Copy Note</strong></StyledButton>)
                                }
                                <StyledButton onClick={this.handleButtonClick} id="download" color="secondary" size="large" variant="contained"><strong>Download Note</strong></StyledButton>
                                <StyledButton onClick={this.handleButtonClick} id="save" color="secondary" size="large" variant="contained"><strong>Save Note</strong></StyledButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Modal