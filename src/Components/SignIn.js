import React, { Component } from 'react'
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import PersonPinIcon from '@material-ui/icons/PersonPin';
import { withStyles } from '@material-ui/core/styles'
import styles from '../Styles/Navbarstyles'
import {auth} from '../firebase/firebase'
import Quicknote from './Quicknote'

class SignIn extends Component {
    constructor(props) {
        super(props)
        
        this.handleSignInClick = this.handleSignInClick.bind(this)
    }

    handleSignInClick() {
        auth.signInAnonymously()
    }

    render() {
        const { classes } = this.props

        return(
            <div>
                <AppBar position="fixed" className={clsx(classes.appBar)}>
                    <Toolbar >
                        <Typography className={classes.heading} variant="h3" noWrap><strong>NOTE Ware</strong></Typography>

                        <Tabs textColor="white" className={classes.tabs} value={"logout"} aria-label="simple tabs example">
                            <Tab onClick={this.handleSignInClick} icon={<PersonPinIcon fontSize="large" />} label="Sign In" />
                        </Tabs>
                    </Toolbar>
                </AppBar>
                <div style={{ minHeight: '100vh', marginTop: '150px', display: 'flex', justifyContent: 'center', overflow: 'auto' }}>
                    <Quicknote />
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(SignIn)