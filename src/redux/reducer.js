const initialState = {
    albums: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ALBUM_SEARCH":
            console.log("reducing")
            return { ...state, albums: action.payload }
        default:
            return state;
    }

}