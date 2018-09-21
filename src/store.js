import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {reducer} from './redux/reducer'

export const store = createStore(reducer,
        compose(
                applyMiddleware(thunk),
                window.devToolsExtension ? window.devToolsExtension() : f => f
            )
    )