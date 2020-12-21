import React from 'react';
import { connect } from 'react-redux'
import SearchResults from '../components/SearchResults'

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
        return (
            <div>
                <SearchResults albums={this.state.albums} />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

const mapStateToProps = (state) => {
    return {
        albums: state.albums
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsContainer)