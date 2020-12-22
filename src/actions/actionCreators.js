const API = 'http://localhost:3000'

export const likes = () => ({ type: 'INCREASE_COUNT' })

export const getAlbums = (query) => {
    console.log(query)
    return (dispatch) => {
        fetch('http://localhost:3000/search?query=' + query, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log('RAILS API ALBUMS:', data);
                dispatch({ type: "ALBUM_SEARCH", payload: data })
            })
            .catch((error) => {
                console.error('ERROR:', error);
            });
    }
}

export const addAlbum = (album) => {
    console.log("ALBUMMMMMMMMMMMMMM", album)
    return (dispatch) => {
        fetch('http://localhost:3000/albums?' + 'name=' + album.name + '&image_url=' + album.image_url + '&liked_by=' + album.liked_by, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log('All Albums', data);
                dispatch({ type: "ADD_ALBUM", payload: data })
            })
            .catch((error) => {
                console.error('ERROR:', error);
            });
    }
}
export const setUsername = (value) => {
    console.log("Setting username in action creator")
    return (dispatch) => {
        dispatch({ type: "SET_USERNAME", payload: value })
    }
}

export const getAllAlbums = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/albums', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => {
                dispatch({ type: "GET_ALL_ALBUMS", payload: data })
            })
            .catch((error) => {
                console.error('ERROR:', error);
            });
    }
}

export const onDeleteAlbum = (album) => {
    console.log("ALBUMMMMMMMMMMMMMM", album)
    return (dispatch) => {
        fetch('http://localhost:3000/albums?' + 'album_id=' + album.id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => {
                dispatch({ type: "DELETE_ALBUM", payload: data })
            })
            .catch((error) => {
                console.error('ERROR:', error);
            });
    }
}