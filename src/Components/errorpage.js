import React, { Component } from 'react'
import photo404 from '../Styles/photo404.jpg'

class Errorpage extends Component {
    render() {
        return(
            <div style={{ backgroundImage: `url(${photo404})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100vh', width: '100vw' }}>
            </div>
        )
    }
}

export default Errorpage