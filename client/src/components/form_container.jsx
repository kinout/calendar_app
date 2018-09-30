import React, { Component } from 'react';
import { Button, FormGroup, FormControl } from 'react-bootstrap';

class FormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      start: "",
      end: "",
      errorMsg: ""
    }
  }

  onChangeTitleText(e) {
    this.setState({ title: e.target.value });
  }

  onChangeStartText(e) {
    this.state.errorMsg = "";
    this.setState({ start: e.target.value });
  }

  onChangeEndText(e) {
    this.setState({ end: e.target.value });
  }

  hundleSubmit = () => {
    this.state.errorMsg = "";
    if(this.state.start.length === 0) {
      this.setState({errorMsg: '開始日を入力してください'})
      return
    }
    if(this.state.start > this.state.end ) {
      this.setState({errorMsg: '開始日より後に終了日を設定してください'})
      return
    }
    const schedule = {
      title: this.state.title,
      start: this.state.start,
      end: this.state.end
    }
    this.props.createSchedule(schedule);
    this.setState({ title: '', start: '', end: '' });
  }

  render() {
    return (
      <div>
        {this.state.errorMsg.length > 0 && <div className='alert alert-danger'>{this.state.errorMsg}</div>}
        <form>
          <FormGroup controlId="formBasicText">
            <label>タイトル</label>
            <FormControl
              type="text"
              value={this.state.title}
              placeholder="タイトル"
              onChange={e => this.onChangeTitleText(e)}
            />
            <label className='required'>開始日</label>
            <FormControl
              type="date"
              value={this.state.start}
              onChange={e => this.onChangeStartText(e)}
            />
            <label>終了日</label>
            <FormControl
              type="date"
              value={this.state.end}
              onChange={e => this.onChangeEndText(e)}
            />
          </FormGroup>

        </form>
        <Button type="submit" onClick={this.hundleSubmit}>登録</Button>
      </div>
    )
  }
}

export default FormContainer