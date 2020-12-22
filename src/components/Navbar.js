import React from 'react'
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

    return (
        <div className="navbar"      >
            <a href="#" onClick={(event) => handleHomeClick(event)}>Home </a>
            <a href="#" onClick={(event) => handleBoardClick(event)}>Board </a>
        </div>
    )
}

export default withRouter(Navbar)