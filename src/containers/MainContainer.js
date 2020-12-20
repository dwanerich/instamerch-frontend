import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Login from '../components/Login'
import CoversContainer from './CoversContainer'

class MainContainer extends React.Component {

    state = {
        username: ""
    }
    
    // here we set state for Username in the parent component
    setUsername = (username) => this.setState({username: username})

    render() {
        console.log("The Main Container", this.state.username)
        const { username } = this.state
        return (this.state.username ==="" ? <> <Header /> <Login setUsername={this.setUsername} /> <Footer /></>: <CoversContainer username={ username } logOut={() => this.setUsername("")}/> )
    }
}

export default MainContainer