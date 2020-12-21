
// thunk allows us to return a function that takes in the argument of dipatch instead of object represening the action
const API = 'http://localhost:3000'
export const likes = () => ({ type: 'INCREASE_COUNT' })

export const getAlbums = (query) => {
    console.log("inside getAlbums")
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
                dispatch( { type: "ALBUM_SEARCH", payload: data})
            })
            .catch((error) => {
                console.error('ERROR:', error);
            });
    }
}

export const addAlbum = (album) => {
    console.log("album", album)
    console.log("inside getAlbums")
    return (dispatch) => {
        fetch('http://localhost:3000/albums?' + 'name=' + album.name + '&image_url=' + album.image_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log('All Albums', data);
                dispatch( { type: "ADD_ALBUM", payload: data})
            })
            .catch((error) => {
                console.error('ERROR:', error);
            });
    }
}