const initialState = {
    albums: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ALBUM_SEARCH":
            console.log("reducing")
            return { ...state, albums: action.payload }
        case "ADD_ALBUM":
            console.log("adding album")
            return { ...state }
        default:
            return state;
    }

}