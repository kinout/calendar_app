import React, { Component } from 'react';

import FullCalendar from 'fullcalendar-reactwrapper';
import 'fullcalendar-reactwrapper/dist/css/fullcalendar.min.css';

import ModalContainer from "./modal_container";

class CalendarViewContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { events: [], showModal: false };
    this.handleHideModal = this.handleHideModal.bind(this);
    this.handleShowModal = this.handleShowModal.bind(this);
  }

  handleHideModal() {
    this.setState({ showModal: false })
  }

  handleShowModal() {
    this.setState({ showModal: true })
  }

  render() {
    let events = [];
    this.props.scheduleData.map((data) => {
      return (
        events.push({
          title: data.title != null ? data.title : '',
          start: data.start != null ? data.start : '',
          end: data.end != null ? data.end : ''
        })
      )
    })
    this.state.events = events
    const date = new Date();
    return (
      <div id="calendar-view-component">
        {this.state.showModal ? <ModalContainer handleHideModal={this.handleHideModal} /> : null}
        <FullCalendar
          id="your-custom-ID"
          header={{
            left: 'prev,next today',
            center: 'title',
            right: 'month agendaWeek agendaDay'
          }}
          firstDay={1}
          defaultView={'month'}
          // jQuery UI theme
          theme={false}
          weekMode={'fixed'}
          // 高さ(px)
          height={700}
          // コンテンツの高さ(px)
          contentHeight={600}
          // カレンダーの縦横比(比率が大きくなると高さが縮む)
          aspectRatio={1.35}
          // viewDisplay= {function(view) {
          //   alert('ビュー表示イベント ' + view.title);
          // }}
          // 日付クリックイベント
          dayClick={ this.handleShowModal }
          // 時間の書式
          timeFormat={'H(:mm)'}
          // ボタン文字列
          buttonText={{
            today: '今日',
            month: '月',
            week: '週',
            day: '日'
          }}
          // 月名称
          monthNames={['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']}
          // 月略称
          monthNamesShort={['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']}
          // 曜日名称
          dayNames={['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日']}
          // 曜日略称
          dayNamesShort={['日', '月', '火', '水', '木', '金', '土']}
          defaultDate={date}
          navLinks={true} // can click day/week names to navigate views
          editable={true}
          eventLimit={true} // allow "more" link when too many events
          events={this.state.events}
        />
      </div>
    );
  }
}

export default CalendarViewContainer