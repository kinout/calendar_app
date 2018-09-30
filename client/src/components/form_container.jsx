import React, { Component } from 'react';
import { Button, FormGroup, FormControl } from 'react-bootstrap';

class FormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      start: "",
      end: ""
    }
  }

  onChangeTitleText(e) {
    this.setState({ title: e.target.value });
  }

  onChangeStartText(e) {
    this.setState({ start: e.target.value });
  }

  onChangeEndText(e) {
    this.setState({ end: e.target.value });
  }

  hundleSubmit = () => {
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
        <form>
          <FormGroup controlId="formBasicText">
            <FormControl
              type="text"
              value={this.state.title}
              placeholder="タイトル"
              onChange={e => this.onChangeTitleText(e)}
            />
            <FormControl
              type="date"
              value={this.state.start}
              onChange={e => this.onChangeStartText(e)}
            />
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