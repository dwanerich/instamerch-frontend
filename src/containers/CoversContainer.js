import React from 'react';
import CoverCard from '../components/AlbumCovers'
import Home from '../components/Header'
import InputGroup from 'react-bootstrap/InputGroup';
import AlbumCovers from '../components/AlbumCovers'
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
        console.log("###############")
        console.log(this.props)
        console.log("###############")
        return (
            <>
                <Home />
                <p>welcome, <strong> {this.props.username}! </strong></p>
                <button onClick={logOut}>Logout</button>

                <h1 className="Login-component" style={{ color: "white" }}> </h1>

                <AlbumCovers allAlbums={this.props.allAlbums} onAddAlbum={this.props.onAddAlbum} />



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

                <SearchResultsContainer albums={this.props.albums} onAddAlbum={this.props.onAddAlbum}/>

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
        albums: state.albums,
        allAlbums: state.allAlbums,
        username: state.username
    }
}


export default connect(mapStateToProps, mapDispatchToProps )(CoversContainer)