import React from 'react'

class AlbumCovers extends React.Component {
    state = {
        allAlbums: {albums: []}
    }

    componentWillReceiveProps({ allAlbums }) {
        console.log("COVERS RENDERING")
        this.setState({ allAlbums });
    }
    
    render() {
        console.log("ALL ALBUMS", this.state.allAlbums)
        return(
            <div>
                {
                    this.state.allAlbums["albums"] && this.state.allAlbums["albums"].map((album, i) => {
                        return (
                            <img src={album.image_url} className="small-card" key={i}/>
                        )
                    })
                }
            </div>
        )
    }
}

export default AlbumCovers