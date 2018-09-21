const TOGGLE_LOADER = 'toggle-loader'
const REQUEST_ERR = 'request-err'
let count = 0

export function loaderActive (state=false, action){
    switch (action.type ){
        case TOGGLE_LOADER:
        if(action.isActive){
            count++
        }else{
            count--
        }
        if(count > 0){
            return true
        }else{
            return false
        }
        case REQUEST_ERR:
            count = 0
            return false
        
        default: 
            return state
    }
}

export function toggle(boo){
    return {type: TOGGLE_LOADER, isActive: boo }
}

export function reqErr(){
    return {type: REQUEST_ERR}
}