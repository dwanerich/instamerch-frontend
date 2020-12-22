import React from 'react'
import { useHistory, withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import { getAllAlbums, onDeleteAlbum } from '../actions/actionCreators'
import  AlbumCover  from './AlbumCover'

class AlbumCovers extends React.Component {
    state = {
        allAlbums: { albums: [] }
    }

    componentWillMount() {
        this.setState({
            allAlbums: this.props.onGetAllAlbums()
        })
    }

    componentWillReceiveProps({ allAlbums }) {
        console.log("COVERS RENDERING")
        this.setState({ allAlbums });
    }

    render() {
        console.log(this.state);
        return (
            <div>
                {
                    this.state.allAlbums && this.state.allAlbums["albums"].map((album, i) => {
                        return (
                            <AlbumCover album={album} key={i} onDeleteAlbum={this.props.onDeleteAlbum}/>

                        )
                    })
                }
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onGetAllAlbums: () => dispatch(getAllAlbums()),
        onDeleteAlbum: (album) => dispatch(onDeleteAlbum(album))
    }
}
const mapStateToProps = (state) => {
    return {
        allAlbums: state.allAlbums
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AlbumCovers))