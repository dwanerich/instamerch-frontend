import React from 'react';
import CoverCard from '../components/CoverCard'
import Home from '../components/Header'
import InputGroup from 'react-bootstrap/InputGroup';
import CoverCards from '../components/CoverCards'
import { connect } from 'react-redux'
import { likes } from '../actions/actionCreators'


class CoversContainer extends React.Component {

    componentDidMount() {
        console.log("fetch covers")
    }

    state = {
        searchTerm: '',
        songs: [],
        user: {}

    }

    handleSearchInputChange = event => {
        this.setState({ searchTerm: event.target.value }, () => {
            console.log(this.state)
        });

    }


    handleSpotifyFormSubmit = event => {
        event.preventDefault();
        console.log("Spotify Fetch Request")
        // fetch(BASE_URL.concat(this.state.searchTerm))
        //     .then(res => res.json())
        //     .then(res => this.setState({ reviews: res.results }));
    };



    render() {
        const { username, logOut } = this.props
        console.log(this.props)
        return (
            <>
                <Home />
                <p>Welcome, <strong> {username}! </strong></p>
                <button onClick={logOut}>Logout</button>

                <h1 className="Login-component" style={{ color: "white" }}> </h1>

                <CoverCards />



                {/* form for URL cover generator */}

                <hr></hr>

                <h2>Quick Search:</h2>

                <form size='large' onSubmit={this.handleSpotifyFormSubmit}>
                    <label htmlFor="search-input" ></label>
                    <input
                        id="keyword" name="keyword" className="img-input"
                        placeholder='Song Title or Album Name'
                        type="text"
                        style={{ width: 250, fontSize: 15 }}
                        onChange={() => this.props.albumSearch()}
                    />
                    <button type="submit" style={{ fontSize: 15 }}>Search</button>
                </form>

            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        albumSearch: () => { dispatch({ type: "ALBUM_SEARCH", payload: "Juicy" }) }
    }
}


export default connect(null, mapDispatchToProps )(CoversContainer)