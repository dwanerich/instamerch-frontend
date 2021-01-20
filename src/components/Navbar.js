import React from 'react'
// eslint-disable-next-line
import { withRouter, useHistory } from 'react-router-dom'


const Navbar = (props) => {

    const handleHomeClick = (event) => {
        event.preventDefault()
        props.history.push("/")
    }

    const handleBoardClick = (event) => {
        event.preventDefault()
        props.history.push("/board")
    }

    const handleAboutPageClick = (event) => {
        event.preventDefault()
        props.history.push("/about")
    }

    return (
        <div style={{fontSize: 26}}className="mr-auto" variant="dark" bg="dark"     >
            <a href="/" onClick={(event) => handleHomeClick(event)}>Home </a>
            <a href="/" onClick={(event) => handleBoardClick(event)}>Board </a>
            <a href="/" onClick={(event) => handleAboutPageClick(event)}>About </a>
        </div>
        
    )
}

export default withRouter(Navbar)