import React from 'react';

export default class SimplerComponent extends React.Component {
  constructor(){
    super()
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      mood: 'happy'
    }
  }

  handleClick(){
    this.state.mood === 'happy' ? this.setState({mood:'sad'}) : this.setState({mood: 'happy'})
  }

  render(){
    return(
      <div onClick={this.handleClick}>
        <p>{this.state.mood}</p>
      </div>
    )
  }
}
