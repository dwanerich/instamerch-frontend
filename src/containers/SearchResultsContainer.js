import React from 'react';
import { connect } from 'react-redux'
import SearchResults from '../components/SearchResults'
import { addAlbum } from '../actions/actionCreators'

class SearchResultsContainer extends React.Component {
    state = {
        albums: []
    }

    componentDidMount() {
        console.log("SearchResultsContainer mounted")
        console.log("albums in results: ", this.props.albums)
    }

    componentWillReceiveProps({ albums }) {
        this.setState({ albums });
    }

    render() {
        console.log("SRC", this.props)
        return (
            <div>
                <SearchResults albums={this.state.albums} onAddAlbum={this.props.onAddAlbum}/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddAlbum: (album) => { dispatch(addAlbum(album)) },
    }
}

const mapStateToProps = (state) => {
    return {
        albums: state.albums,
        allAlbums: state.allAlbums
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsContainer)