import React from 'react'
import './Search.css'
import {getItems} from '../redux/search.redux'
import {connect} from 'react-redux'
import List from '../List/List'
@connect(
    state => state.search,
    {getItems}
    )
export default class Search extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
        input:''
    }
    this.submit = this.submit.bind(this)
  }
  submit(){
    this.props.getItems(this.state.input)
  }
  handleKeyup(e){
    if(e.keyCode==13){
        this.submit()
        return
    }
    this.setState({input: e.target.value})
  }
  render() {
    let errMsg = null, list = null
    if(this.props.err.length !== 0){ 
        console.log('err occur')
        errMsg = (<div className="searchErr">
                    {this.props.err}
                </div>
            )
    }
    
    return (
      <div className="Search">
          <div className="input clearfix">
            <input className="search-box" onKeyUp={(e) => this.handleKeyup(e)} />
            <div className="search-btn" onClick={this.submit}>Search</div>
          </div>
          <List items={this.props.items} type={'left'}/>
          {errMsg}
      </div>
    );
  }
}