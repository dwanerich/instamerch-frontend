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
            return { ...state, allAlbums: action.payload }
        case "SET_USERNAME":
            console.log("setting username in REDUCER")
            return { ...state, username: action.payload }
        default:
            return state;
    }

}