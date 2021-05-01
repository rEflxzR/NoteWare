import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import {auth} from './firebase/firebase'
import Notedashboard from './Components/Notedashboard'
import SignIn from './Components/SignIn'
import Notedisplay from './Components/Notedisplay'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			user: null
		}
	}

	componentDidMount() {
		auth.onAuthStateChanged((res) => {
			this.setState({ user: res })
		})
	}

	render() {
		const {user} = this.state
		return(
			<div>
				<Switch>
					<Route exact path="/" component={() => {
						return user ? <Notedashboard /> : <SignIn />
					}} />
					
					<Route exact path="/dashboard" component={() => {
						return user ? <Notedashboard /> : <Redirect to="/" />
					}} />

					<Route exact path="/quicknotes/:id" component={Notedisplay} />
					<Route exact path="/singlepagenotes/:id" component={Notedisplay} />
				</Switch>
			</div>
		)
	}
}

export default App