import React, { Component } from 'react'
import photo404 from '../Styles/photo404.jpg'

class Errorpage extends Component {
    render() {
        return(
            <div style={{ backgroundImage: `url(${photo404})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100vh', width: '100vw' }}>
                <h1 className="text-right"><a href={`http://${window.location.hostname}:${window.location.port}/NoteGram/`} rel="noreferrer">Visit HOMEPAGE</a></h1>
            </div>
        )
    }
}

export default Errorpage