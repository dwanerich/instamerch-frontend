import React from 'react'

const AlbumCover = (props) => {
    return (
        <span className="album-cover-art small-card" onClick={() => props.onDeleteAlbum(props.album)}>
            <img src={props.album.image_url} alt={props.album.name} />
            <span className="liked-by-text">liked by: {props.album.liked_by}</span>
        </span>
    )
}

export default AlbumCover