import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class ViewContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      updateText: this.props.data.title
    }
  }


  handleDeleate = () => {
    this.props.onDelete(this.props.data.id)
  }

  handleUpdate = () => {
    this.props.onUpdate(this.props.data.id, this.state.updateText)
  }

  handleInput = (e) => {
    this.setState({ updateText: e.target.value })
  }

  render() {
    let isEnd = this.props.data.end !== null ? true : false;
    return (
      <div>
        <span>予定日：{this.props.data.start}</span>    
        {isEnd && <span>～{this.props.data.end}</span>}    
        <span className='deleteButton' onClick={this.handleDeleate}>X</span>
        <span>
          <input type="text" value={this.state.updateText} onChange={e => this.handleInput(e)} />
        </span>
        <span>
          <Button type="submit" onClick={this.handleUpdate}>更新</Button>
        </span>
      </div>
    )
  }
}

export default ViewContainer
