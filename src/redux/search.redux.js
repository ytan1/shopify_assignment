import axios from 'axios'

const GOT = 'got'
const ERR = 'error'
const REMOVEALL = 'removeall'
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
            let lastPage = '', nextPage = ''
            if(headers.link){
                lastPage = headers.link.split(';')[0]
                lastPage = lastPage.substring(lastPage.indexOf('<')+1, lastPage.lastIndexOf('>'))
                nextPage = headers.link.split(';')[1]
                nextPage = nextPage.substring(nextPage.indexOf('<')+1, nextPage.lastIndexOf('>'))
            }
            return {err: '', lastPage, nextPage, items: data.items}
        case ERR:
            return {...state, err: action.payload}
        case REMOVEALL:
            return iniState
        default:
            return state;
    }
}

export const getItems = (st) => {
    return dispatch => {
        return axios.get(`/api/search/repositories?q=${st}&per_page=10`
                // {headers: {'Authorization': 'token 9018cdd41a77edd9820531c9146a3f6a4b3df06d'}}
            )
            .then(res => {
                // dispatch(gotErr(''))
                console.log(res)
                dispatch(gotItems(res))
            },err => {
                console.log(err.response)
                if(err.response && err.response.status == 403){
                    dispatch(gotErr('API call limit exceeded, please wait'))
                }else if (err.message){
                    dispatch(gotErr(err.message))
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

export const removeAllItems = () => ({
    type: REMOVEALL
})