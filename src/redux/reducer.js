const initialState = {
    albums: [],
    allAlbums: { albums: []},
    username: ""
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ALBUM_SEARCH":
            console.log("reducing")
            return { ...state, albums: action.payload }
        case "ADD_ALBUM":
            console.log("adding album")
            console.log("payload", action.payload)
            return { ...state, allAlbums: action.payload }
        case "GET_ALL_ALBUMS":
            return { ...state, allAlbums: action.payload }
        case "DELETE_ALBUM":
            console.log("DELETING ALBUM IN REDUCER")
            return { ...state, allAlbums: action.payload }
        case "SET_USERNAME":
            console.log("setting username in REDUCER")
            return { ...state, username: action.payload }
        default:
            return state;
    }

}