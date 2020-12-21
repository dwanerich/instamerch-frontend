import React from 'react'
import '../fonts/Billabong.ttf'
import { useHistory, withRouter } from "react-router-dom";
import { setUsername } from "../actions/actionCreators"
import { connect } from 'react-redux'

class Login extends React.Component {
    state = {
        username: ""
    }

    onChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    onSubmit = (e) => {
        console.log("STATE", this.state)
        e.preventDefault()
        this.props.onSetUsername(this.state.username)

        this.props.history.push("/board")

    }


    render() {
        return (
            <div>
                <p className="Login-component" style={{ color: 'white', fontSize: '40px' }}>The Most <strong>Un</strong>Official <strong>#FanHack </strong> App</p>

                <form >
                    <label>
                        <input type="text" style={{ fontSize: '20px' }} name="username" placeholder="Enter Username..." onChange={this.onChange} value={this.state.username} />
                    </label>
                    <input style={{ fontSize: '20px' }} type="submit" value="Login" onClick={this.onSubmit}/>
                </form>


                <br className="Login-component" /><br />

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSetUsername: () => dispatch(setUsername)
    }
}
const mapStateToProps = (state) => {
    return {
        username: state.username
    }
}

// export default withRouter(Login)
export default connect(mapStateToProps, mapDispatchToProps )(withRouter(Login))