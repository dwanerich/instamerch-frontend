import React from 'react';
import CoverCard from '../components/CoverCard'
import Home from '../components/Header'
import InputGroup from 'react-bootstrap/InputGroup';
import CoverCards from '../components/SearchResults'
import { connect } from 'react-redux'
import { likes } from '../actions/actionCreators'
import SearchResultsContainer from './SearchResultsContainer'
import { getAlbums, addAlbum } from '../actions/actionCreators'


class CoversContainer extends React.Component {

    componentDidMount() {
        console.log("fetch covers")
    }

    handleSpotifyFormSubmit = event => {
        event.preventDefault();
        console.log("Spotify Fetch Request")
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
                        onChange={(event) => this.props.onGetAlbums(event.target.value)}
                    />
                    <button type="submit" style={{ fontSize: 15 }}>Search</button>
                </form>

                <SearchResultsContainer albums={this.props.albums} onAddAlbum={this.addAlbum}/>

            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetAlbums: (value) => { dispatch(getAlbums(value)) },
        onAddAlbum: (value) => { dispatch(addAlbum(value)) },
    }
}

const mapStateToProps = (state) => {
    return {
        albums: state.albums
    }
}


export default connect(mapStateToProps, mapDispatchToProps )(CoversContainer)