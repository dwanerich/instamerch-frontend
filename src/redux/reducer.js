import { combineReducers } from 'redux'
import { getAlbums } from "../actions/actionCreators"


// NEW REDUCER && FINAL COMBINED REDUCER

const initialState = {
    albums: {
        results: [],
    }
}


export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "ALBUM_SEARCH":
            console.log("SEARCHING FOR ALBUMS")
    }
}