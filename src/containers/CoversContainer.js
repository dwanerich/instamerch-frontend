import React from 'react';
import Home from '../components/Header'
import AlbumCovers from '../components/AlbumCovers'
import { connect } from 'react-redux'
import SearchResultsContainer from './SearchResultsContainer'
import { getAlbums, addAlbum } from '../actions/actionCreators'
import { withRouter} from 'react-router-dom'
import ToggleSwitch from '../components/ToggleSwitch'


class CoversContainer extends React.Component {

    logOut = () => {
        this.props.history.push("/")
    }

    handleSpotifyFormSubmit = event => {
        event.preventDefault();
    };

    render() {
   
        return (
            <>
                <Home />
                <ToggleSwitch />
                
                <p>welcome, <strong> {this.props.username}!</strong></p>
                <button onClick={() => this.logOut()}>Logout</button>

                <br /> <br />

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

                <SearchResultsContainer albums={this.props.albums} onAddAlbum={this.props.onAddAlbum} username={this.props.username}/>

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


export default connect(mapStateToProps, mapDispatchToProps )(withRouter(CoversContainer))