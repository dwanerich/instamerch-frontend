import React from 'react';
import { connect } from 'react-redux'

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
                {this.state.albums.length > 0 && this.state.albums.map((album, i) => {
                    return (
                        <div key={i}>
                            <div>{album.name}</div>
                            <img className="card" src={album.image} />
                        </div>
                    )
                })}

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