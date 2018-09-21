import React from 'react'
import {connect} from 'react-redux'
import './Item.css'
import axios from 'axios'
import {gotErr} from '../redux/search.redux'
import {addFav, removeFav} from '../redux/favorites.redux'
@connect(
    null,
    {gotErr, addFav, removeFav}
    )
export default class Item extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      tag: ''
    }
  }

  componentDidMount(){
    const url = this.props.tagUrl.replace('https://api.github.com', '/api')
    axios.get(url)
      .then(res => {
        if(res.data.length != 0){
        this.setState({
          tag: res.data[0].name
          })}
      }, err => {
        this.props.gotErr(err.message)
      })

  }
  

  render() {
    let btn = null
    if(this.props.type === 'add')
      btn = (<span className="listBtn" onClick={() => this.props.addFav({id: this.props.keyId, name: this.props.name, owner: {login: this.props.owner}, language: this.props.language, tags_url: this.props.tagUrl, svn_url: this.props.url})}>Add</span>)
    else if(this.props.type === 'remove')
      btn = (<span className="listBtn" onClick={() => this.props.removeFav(this.props.name)}>Remove</span>)

    return (
      <div className="listItem ">
        <span className="listName"><a href={this.props.url} target="_blank">{this.props.owner}/{this.props.name}</a></span><span className="listLang">{this.props.language}</span><span className="listTag">{this.state.tag}</span>
          {btn}
      </div>
    );
  }
}