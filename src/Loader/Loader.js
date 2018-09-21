import React from 'react'
import { connect } from 'react-redux'
import './Loader.css'
const LoaderWrap = ({active}) => {
    if(active)
        return <div className="loader"></div>
    else
        return null
}

export const Loader = connect(
        state => ({active: state.loaderActive})
    )(LoaderWrap)
