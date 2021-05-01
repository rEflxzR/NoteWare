import React, { Component } from 'react'
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import NoteIcon from '@material-ui/icons/Note';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';
import EventNoteIcon from '@material-ui/icons/EventNote';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import { withStyles } from '@material-ui/core/styles'
import styles from '../Styles/Navbarstyles'
import {auth, firestore} from '../firebase/firebase'
import Quicknote from './Quicknote'
import Singlepagenotes from './Singlepagenotes'

class Notedashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            drawerOpen: window.innerWidth<1280 ? false : true,
            currentPage: "quicknote",
            selectedNoteIndex: null,
            selectedNote: null,
            notes: null
        }

        this.handleLogOutClick = this.handleLogOutClick.bind(this)
        this.changePage = this.changePage.bind(this)
        this.toggleDrawer = this.toggleDrawer.bind(this)
    }

    componentDidMount() {
        firestore.collection("notes").onSnapshot((res) => {
            const allNotes = []
            res.docs.map((note) => {
                const noteData = note.data()
                noteData["id"] = note.id
                allNotes.push(noteData)
                return null
            })

            this.setState({ notes: allNotes })
        })
    }

    changePage(evt) {
        this.setState({ currentPage: evt.currentTarget.getAttribute("value") })
    }

    toggleDrawer() {
        this.setState({ drawerOpen: !this.state.drawerOpen })
    }

    handleLogOutClick() {
        auth.signOut()
    }

    render() {
        const { classes } = this.props
        const { drawerOpen, currentPage } = this.state
        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="fixed" className={clsx(classes.appBar, {[classes.appBarShift]: drawerOpen})}>
                    <Toolbar >
                        <IconButton aria-label="open drawer" onClick={this.toggleDrawer} edge="start" className={clsx(classes.menuButton, drawerOpen && classes.hide)}>
                            <MenuIcon />
                        </IconButton>

                        <Typography className={classes.heading} variant="h3" noWrap><strong>NOTE Ware</strong></Typography>

                        <Tabs textColor="white" className={classes.tabs} value={"logout"} aria-label="simple tabs example">
                            <Tab onClick={this.handleLogOutClick} icon={<PersonPinIcon fontSize="large" />} label="logout" />
                        </Tabs>
                    </Toolbar>
                </AppBar>
                <Drawer className={classes.drawer} variant="persistent" anchor="left" open={drawerOpen} classes={{paper: classes.drawerPaper}}>
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={this.toggleDrawer}>
                            <ChevronLeftIcon className={classes.icon} />
                        </IconButton>
                    </div>

                    <Divider />
                        <List className={classes.list}>
                        {[{"text": 'Quick Note', "icon": <NoteIcon color="inherit" className={classes.icon}/>}, {"text": 'Single Page Notes', "icon": <EventNoteIcon className={classes.icon}/>}].map((icon, index) => (
                            <ListItem onClick={this.changePage} className={classes.listItem} button key={icon.text} value={icon.text}>
                                <ListItemIcon>{icon.icon}</ListItemIcon>
                                <strong><ListItemText color="inherit" primary={icon.text} /></strong>
                            </ListItem>
                        ))}
                        </List>
                </Drawer>

                <main className={clsx(classes.content, {[classes.contentShift]: drawerOpen })}>
                    <div className={classes.mainBoxDropDown} />
                    {currentPage==="Quick Note" && <Quicknote />}
                    {currentPage==="Single Page Notes" && <Singlepagenotes />}

                </main>
            </div>
        )
    }
}

export default withStyles(styles)(Notedashboard)