const ADD = 'add'
const REMOVE = 'remove'


let iniState = []
if(localStorage.getItem('favorites')){
    const cache = JSON.parse(localStorage.getItem('favorites')) 
    if(cache.constructor === Array)
        iniState = cache
}
let nextState
export const favorites = (state = iniState, action) => {
    switch (action.type){
        case ADD:
            nextState = [...state, action.payload]
            localStorage.setItem('favorites', JSON.stringify(nextState))
            return nextState
        case REMOVE:
            nextState = state.filter(e => e.name !== action.payload)
            localStorage.setItem('favorites', JSON.stringify(nextState))
            return nextState
        default:
            return state
    }
}


export const addFav = (obj) => ({
    type: ADD,
    payload: obj
})
export const removeFav = (name) => ({
    type: REMOVE,
    payload: name
})