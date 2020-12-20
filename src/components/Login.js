import React from 'react'
import '../fonts/Billabong.ttf'


class Login extends React.Component {
    state = {
        username: ""
    }

    onChange = (e) => {
        const{name, value} = e.target
        this.setState({ [name]: value})
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.setUsername(this.state.username)
        this.setState({username: ""})
    }

    
    render() {
        return (
        <div>
                <p className="Login-component" style={{ color: 'white' }}>The Most <strong>Un</strong>Official <strong>#FanHack </strong> App</p>

            <form onSubmit={this.onSubmit}>
                <label>
                 <input type="text" name="username" placeholder="Enter Username..." onChange={this.onChange} value={this.state.username} />
                </label>
                <input type="submit" value="Login" />
            </form>


                <br className="Login-component" /><br /><br />

        </div>
        )
    }
}


export default Login