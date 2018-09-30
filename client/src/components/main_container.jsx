import React, { Component } from 'react';
import update from 'react-addons-update';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import CalendarContainer from './calendar_container';
import FormContainer from './form_container';
import CalendarViewContainer from './calendar_view_container';

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
    axios.post('http://localhost:3001/calendar', { title: schedule.title, start: schedule.start, end: schedule.end })
      .then((response) => {
        const newData = update(this.state.schedules, { $push: [response.data] })
        this.setState({ schedules: newData })
      })
      .catch((data) => {
        console.log(data)
      })
  }

  deleateSchedule = (id) => {
    axios.delete(`http://localhost:3001/calendar/${id}`)
      .then((response) => {
        const scheduleIndex = this.state.schedules.findIndex(x => x.id === id)
        const deletedSchedules = update(this.state.schedules, { $splice: [[scheduleIndex, 1]] })
        this.setState({ schedules: deletedSchedules })
        console.log('set')
      })
      .catch((data) => {
        console.log(data)
      })
  }

  updateSchedule = (id, title) => {
    const scheduleIndex = this.state.schedules.findIndex(x => x.id === id)
    axios.patch(`http://localhost:3001/calendar/${id}`, { title: title,
     start: this.state.schedules[scheduleIndex].start, end: this.state.schedules[scheduleIndex].end })
      .then((response) => {
        const schedules = update(this.state.schedules, { [scheduleIndex]: { $set: response.data } })
        this.setState({ schedules: schedules })
      })
      .catch((data) => {
        console.log(data)
      })
  }

  render() {
    return (
      <div className='app-main'>
        <FormContainer hendleAdd={this.hendleAdd}  createSchedule={this.createSchedule} />
        <CalendarContainer scheduleData={this.state.schedules} deleateSchedule={this.deleateSchedule} updateSchedule={this.updateSchedule} />
        <CalendarViewContainer scheduleData={this.state.schedules} />
      </div>
    );
  }
}

export default MainContainer