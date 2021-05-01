import React, { Component } from 'react'
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import styles from '../Styles/Navbarstyles'
import {firestore} from '../firebase/firebase'
import './Notedisplay.css'

class Notedisplay extends Component {
    constructor(props) {
        super(props)
        this.state = {
            noteData: []
        }
    }

    componentDidMount() {
        const docId = window.location.pathname.split("/").reverse()[0]
        const collectionName = window.location.pathname.split("/").reverse()[1]
        firestore.collection(collectionName).doc(docId).get()
        .then((res) => {
            console.log(res.data())
            this.setState({ noteData: res.data() })
        })
    }

    render() {
        const { classes } = this.props
        const { noteData } = this.state

        return (
            <div className="main-sharedurl">
                <AppBar position="fixed" className={clsx(classes.appBar)}>
                    <Toolbar >
                        <Typography className={classes.heading} variant="h3" noWrap><strong>NOTE Ware</strong></Typography>
                    </Toolbar>
                </AppBar>
                <main className={clsx(classes.cardcontent)}>
                    <div className={classes.mainBoxDropDown} />
                    <div className="main-card">
                        <div className="content-card">
                            <div className="card-big-shadow">
                                <div className="card card-just-text" data-background="color" data-color={window.location.pathname.split("/").reverse()[1]==="singlepagenotes" ? "blue" : "purple"} data-radius="none">
                                    <div className="content">
                                        {window.location.pathname.split("/").reverse()[1]==="singlepagenotes" ? (<h1 className="mb-3 category"><strong>{noteData.title}</strong></h1>) : (null)}
                                        <h5 className="description">{noteData.text}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

            </div>
        )
    }
}

export default withStyles(styles)(Notedisplay)