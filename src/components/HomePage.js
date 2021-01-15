import React from 'react'
import Header from '../components/Header'
import Login from '../components/Login'

class HomePage extends React.Component {
    // state = {
    //     username: ""
    // }
    
    setUsername = (username) => this.setState({username: username})

    render() {
        return (
            <div>
                <Header /> <Login setUsername={this.setUsername} />
            </div>
        )
    }
}

export default HomePage
