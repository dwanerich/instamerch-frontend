import React from 'react'

class SearchResults extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.albums && this.props.albums.length > 0 && this.props.albums.map((album, i) => {
                        return (
                            <div key={i}>
                                <p>{album.name}</p>
                                <img alt={album.name} className="card" src={album.image} onClick={() => this.props.onAddAlbum({ name: album.name, image_url: album.image, liked_by: this.props.username })} />
                            </div>
                        )
                    })
                }
            </div>
        )
    }

}

export default SearchResults