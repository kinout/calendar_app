import React, { Component } from 'react';
import ViewContainer from './view_container'

class CalendarContainer extends Component {
  render() {
    return (
      <div className='scheduleList'>
        <h3>予定一覧</h3>
        {this.props.scheduleData.map((data) => {
          return (
            <ViewContainer data={data} key={data.id}
              onDelete={this.props.deleateSchedule} onUpdate={this.props.updateSchedule} />
          )
        })}
      </div>
    )
  }
}

export default CalendarContainer