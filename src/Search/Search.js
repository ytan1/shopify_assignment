import React from 'react'
import './Search.css'
export default class Search extends React.Component {
  
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="Search">
          <div className="input ">
            <input className="search-box" />
            <div className="search-btn">Search</div>
          </div>
      </div>
    );
  }
}