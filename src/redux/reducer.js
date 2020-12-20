const initialState = {
    albums: {
        results: [],
    }
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ALBUM_SEARCH":
            console.log("reducing")
            return Object.assign({}, state, {
                albums: action.payload
            });
        default:
            return state;
    }

}