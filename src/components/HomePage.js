import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Login from '../components/Login'

class HomePage extends React.Component {
    state = {
        username: ""
    }
    
    setUsername = (username) => this.setState({username: username})

    render() {
        return (
            <div>
                <Header /> <Login setUsername={this.setUsername} /> <Footer />
            </div>
        )
    }
}

export default HomePage
