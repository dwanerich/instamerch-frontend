import { combineReducers } from 'redux'
import { getAlbums } from "../actions/actionCreators"


// NEW REDUCER && FINAL COMBINED REDUCER

const initialState = {
    albums: {
        results: [],
    }
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ALBUM_SEARCH":
            fetch('http://localhost:3000/search?query=' + action.payload, {
                method: 'GET', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                // body: JSON.stringify(data),
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