import React from 'react'
import { useHistory, withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import { getAllAlbums } from '../actions/actionCreators'

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
                            <div className="album-cover-art" key={i}>
                            <img src={album.image_url} className="small-card"  />
                            <p>liked by: { album.liked_by }</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onGetAllAlbums: () => dispatch(getAllAlbums())
    }
}
const mapStateToProps = (state) => {
    return {
        allAlbums: state.allAlbums
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AlbumCovers))