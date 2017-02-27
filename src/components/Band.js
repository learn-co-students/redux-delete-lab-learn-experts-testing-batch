import React, { Component } from 'react'

class Band extends Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id){
    console.log('This props store is ' + this.props.store)
    this.props.store.dispatch({
      type: "DELETE_BAND",
      payload: id
    })
  }
  render(){
    return(
      <div>
        <li>{this.props.text}</li>
        <button onClick={this.handleClick.bind(null, this.props.id)}>Delete</button>
      </div>
    )
  }
}

export default Band
