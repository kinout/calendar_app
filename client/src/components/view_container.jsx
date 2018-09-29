import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class ViewContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      updateText: this.props.data.comment,
    }
  }


  handleDeleate = () => {
    this.props.onDelete(this.props.data.id)
  }

  handleUpdate = () => {
    this.props.onUpdate(this.props.data.id, this.state.updateText)
    this.setState({updateText: ''});
  }

  handleInput = (e) => {
    this.setState({ updateText: e.target.value })
  }

  render() {
    return (
      <div>
        <span>予定日：{this.props.data.ymd}</span>        
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
