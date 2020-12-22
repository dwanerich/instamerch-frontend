import React from 'react'

const AlbumCover = (props) => {
    return (
        <div className="album-cover-art" onClick={() => props.onDeleteAlbum(props.album)}>
            <img src={props.album.image_url} className="small-card" />
            <p>liked by: {props.album.liked_by}</p>
        </div>
    )
}

export default AlbumCover