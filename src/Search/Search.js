import React from 'react'
import './Search.css'
import {getItems, gotErr, removeAllItems} from '../redux/search.redux'
import {connect} from 'react-redux'
import List from '../List/List'
import {Loader} from '../Loader/Loader'
import {reqErr} from '../redux/loader.redux'
@connect(
    state => state.search,
    {getItems, gotErr, removeAllItems, reqErr}
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
    if(this.state.input){
      this.props.getItems(this.state.input).then(_ => this.props.reqErr()).catch(err => console.log(err))
    }else{
      this.props.gotErr('Need input')
    }
    
  }
  handleKeyup(e){
    if(e.keyCode==13){
        this.submit()
        return
    }
    this.setState({input: e.target.value})
    if(!e.target.value){
      this.props.removeAllItems()
    }
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
          <Loader/>
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