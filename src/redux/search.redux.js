import axios from 'axios'

const GOT = 'got'
const ERR = 'error'
const iniState = {
    items:[],
    lastPage:'',
    nextPage:'',
    err:''
}

export const search = (state = iniState, action) => {
    switch (action.type) {
        case GOT:
            const {data, headers} = action.payload
            let lastPage = headers.link.split(';')[0]
            lastPage = lastPage.substring(lastPage.indexOf('<')+1, lastPage.lastIndexOf('>'))
            let nextPage = headers.link.split(';')[1]
            nextPage = nextPage.substring(nextPage.indexOf('<')+1, nextPage.lastIndexOf('>'))
            return {err: '', lastPage, nextPage, items: data.items}
        case ERR:
            return {...state, err: action.payload}
        default:
            return state;
    }
}

export const getItems = (st) => {
    return dispatch => {
        axios.get(`https://api.github.com/search/repositories?q=${st}&per_page=10`)
            .then(res => {
                // dispatch(gotErr(''))
                console.log(res)
                dispatch(gotItems(res))
            },err => {
                console.log(err)
                if(err.message){
                    dispatch(gotErr('API call limit exceeded, please wait'))
                }
            })
    }
}

const gotItems = (data) => {
    return {
        type: GOT,
        payload: data
    }
}

export const gotErr = (msg) => {
    return {
        type: ERR,
        payload: msg
    }
    
}