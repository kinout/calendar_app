import React, { Component } from 'react';
import { Button, FormGroup, FormControl } from 'react-bootstrap';

class FormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
        ymd: "",
        comment: ""
    }
  }

  onChangeYmdtext(e) {
    this.setState({ ymd: e.target.value });
  }

  onChangeCmttext(e) {
    this.setState({ comment: e.target.value });
  }

  hundleSubmit = () => {
    const schedule = {
      ymd: this.state.ymd,
      comment: this.state.comment
    }
    this.props.createSchedule(schedule);
    this.setState({ymd: '', comment: ''});
  }

  render() {
    return (
      <div>
        <form>
          <FormGroup controlId="formBasicText">
            <FormControl
              type="text"
              value={this.state.ymd}
              placeholder="年月日"
              onChange={e => this.onChangeYmdtext(e)}
            />
            <FormControl
              type="text"
              value={this.state.comment}
              placeholder="コメント"
              onChange={e => this.onChangeCmttext(e)}
            />
          </FormGroup>

        </form>
        <Button type="submit" onClick={this.hundleSubmit}>更新</Button>
      </div>
    )
  }
}

export default FormContainer