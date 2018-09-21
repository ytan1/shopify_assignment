import React from 'react'
import './Favorites.css'
import {connect} from 'react-redux'
import List from '../List/List'
@connect(
      state => ({items: state.favorites}),
      null
  )
export default class Favorites extends React.Component {
 
  constructor(props) {
    super(props)
  }
  render() {
    // console.log(this.props.items)
    return (
      <div className="Favorites">
          <List items={this.props.items} type={'right'}/>
      </div>
    )
  }
}