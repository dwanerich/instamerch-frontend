import { combineReducers } from 'redux'
import { getAlbums } from "../actions/actionCreators"

const initialState = {
    albums: {
        results: [],
    }
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ALBUM_SEARCH":
            fetch('http://localhost:3000/search?query=' + action.payload, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(response => response.json())
                .then(data => {
                    console.log('RAILS API ALBUMS:', data);
                })
                .catch((error) => {
                    console.error('ERROR:', error);
                });
    }
}