
// thunk allows us to return a function that takes in the argument of dipatch instead of object represening the action
const API = 'http://localhost:3000'
export const likes = () => ({ type: 'INCREASE_COUNT' })

export const getAlbums = () => {
    return {
        type: "ALBUM_SEARCH",
        payload: "juicy"
    }
}