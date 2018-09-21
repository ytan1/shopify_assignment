import { combineReducers } from 'redux'
import { search } from './search.redux'
import { favorites } from './favorites.redux'
import { loaderActive } from './loader.redux'

export const reducer = combineReducers({ search, favorites,loaderActive })