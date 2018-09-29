import React, { Component } from 'react';
import update from 'react-addons-update';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import CalendarContainer from './calendar_container';
import FormContainer from './form_container';

class MainContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      schedules: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/calendar')
      .then((results) => {
        console.log(results.data)
        this.setState({ schedules: results.data })
      })
      .catch((data) => {
        console.log(data)
      })
  }

  createSchedule = (schedule) => {
    console.log(schedule);
    axios.post('http://localhost:3001/calendar', {ymd: schedule.ymd, comment: schedule.comment})
      .then((response) => {
        const newData = update(this.state.schedules, { $push: [response.data] })
        this.setState({ schedules: newData })
      })
      .catch((data) => {
        console.log(data)
      })
  }

  render() {
    return (
      <div className='app-main'>
        <FormContainer createSchedule={this.createSchedule} />
        <CalendarContainer scheduleData={this.state.schedules} />
      </div>
    );
  }
}

export default MainContainer