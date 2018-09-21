import React from 'react'
import './List.css'
import Item from '../Item/Item'
import {connect} from 'react-redux'
@connect(
      state => ({favs: state.favorites}),
      null
  )
export default class List extends React.Component {
  
  constructor(props) {
    super(props)
  }
  render() {
    if(this.props.items.length === 0) return null
    return (
      <div className="list">
            <div className="listHeader"><span className="listName">Name</span><span className="listLang">Language</span><span className="listTag">Lastest tag</span></div>
            {this.props.items.map(item => {
              const exist = this.props.favs.some(e => e.name === item.name && e.owner.login === item.owner.login)
              let btnType = 'nothing'
              if(!exist && this.props.type === 'left'){
                btnType = 'add'
              }else if (exist && this.props.type === 'right'){
                btnType = 'remove'
              }
              return (<Item key={item.id} keyId={item.id} name={item.name} owner={item.owner.login} language={item.language} tagUrl={item.tags_url} url={item.svn_url} type={btnType}/>
            )})}
      </div>
    );
  }
}