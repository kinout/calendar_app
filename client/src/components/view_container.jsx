import React, { Component } from 'react';

class ViewContainer extends Component {

  render() {
    return(
      <div>
        <span>{ this.props.data.ymd }</span>
        <span>{ this.props.data.comment }</span>
      </div>
    )
  }
}

export default ViewContainer
