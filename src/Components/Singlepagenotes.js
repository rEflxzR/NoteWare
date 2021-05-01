import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import { styled } from '@material-ui/core/styles';
import { firestore } from '../firebase/firebase'
import Modal from './modal'
import './Singlepagenotes.css'


const htmlexceptbr = /<(?!\s*br\s*\/?)[^>]+>/gi

const ReadButton = styled(Button)({
    background: '#4caf50',
    color: 'black'
})

const EditButton = styled(Button)({
    background: '#f2bf49',
    color: 'black'
})

class Singlepagenotes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allNotes: [],
            clickedNote: [],
            showModal: false,
            modalType: "",
        }
        
        this.addNewNote = this.addNewNote.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.handleCardButtonClick = this.handleCardButtonClick.bind(this)
    }

    componentDidMount() {
        firestore.collection('singlepagenotes').onSnapshot((snap) => {
            const result = []
            snap.forEach((note) => {
                result.push({...note.data(), id: note.id})
            })

            this.setState({ allNotes: result })
        })
    }

    addNewNote() {
        this.setState({ showModal: true, clickedNote: [], modalType: "edit" })
    }

    closeModal(param) {
        if(param.currentTarget===param.target) {
            this.setState({ showModal: false, modalType: "" })
        }
    }

    handleCardButtonClick(evt) {
        const buttonId = evt.currentTarget.getAttribute("id")
        const noteId = evt.currentTarget.getAttribute("noteId")
        if(buttonId==="read") {
            const selectedNote = this.state.allNotes.filter(note => noteId===note.id)
            this.setState({ clickedNote: selectedNote, showModal: true, modalType: "read" })
        }
        else if(buttonId==="edit") {
            const selectedNote = this.state.allNotes.filter(note => noteId===note.id)
            this.setState({ clickedNote: selectedNote, showModal: true, modalType: "edit" })
        }
        else {
            firestore.collection('singlepagenotes').onSnapshot((snap) => {
                snap.forEach((note) => {
                    if(note.id===noteId) {
                        note.ref.delete()
                    }
                })
            })
        }
    }

    render() {
        const { allNotes, clickedNote, modalType } = this.state

        return (
            <div>
                <div className="notecard-palette row">
                    {
                        allNotes.map((note) => {
                            const displayText = note.text.replace(htmlexceptbr, "")
                            return <div className="notecard col col-12 col-lg-3">
                                <div className="notecard-front notecard-shadow">
                                    <div className="notecard-front-border">
                                        <h3 className="text-center my-2"><strong>{note.title}</strong></h3>
                                        <h5 className="text-center">{displayText}</h5>
                                    </div>
                                </div>
                                <div className="notecard-back notecard-shadow">
                                    <div className="notecard-back-border">
                                        <div className="notecard-btn my-4">
                                            <ReadButton noteId={note.id} onClick={this.handleCardButtonClick} id="read" variant="contained" size="large"><strong>Read Note</strong></ReadButton>
                                        </div>
                                        <div className="notecard-btn my-4">
                                            <EditButton noteId={note.id} onClick={this.handleCardButtonClick} id="edit" variant="contained" size="large"><strong>Edit Note</strong></EditButton>
                                        </div>
                                        <div className="notecard-btn my-4">
                                            <Button style={{ color: 'black' }} noteId={note.id} onClick={this.handleCardButtonClick} id="delete" color="secondary" variant="contained" size="large"><strong>Delete Note</strong></Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                    <div className="notecard col col-12 col-lg-3 notecard-shadow">
                        <Button onClick={this.addNewNote}>
                            <div className="add-notecard-border">
                                <div id="btn-imagediv">
                                    <img src="https://content.fortune.com/wp-content/uploads/2019/04/brb05.19.plus_.jpg" alt="add note" />
                                </div>
                                <h3 className="text-center my-0"><strong>Add A New Note</strong></h3>
                            </div>
                        </Button>
                    </div>
                </div>

                {this.state.showModal ? (<Modal closeModal={this.closeModal} modalType={modalType} info={clickedNote.length ? clickedNote : [{id: "", title: "", text: ""}]} />) : (null)}
            </div>
        )
    }
}

export default Singlepagenotes