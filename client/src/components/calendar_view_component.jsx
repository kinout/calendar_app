import React, { Component } from 'react';

import FullCalendar from 'fullcalendar-reactwrapper';
import 'fullcalendar-reactwrapper/dist/css/fullcalendar.min.css';

class CalendarViewComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        {
          title: 'All Day Event',
          start: '2017-05-01'
        },
        {
          title: 'Long Event',
          start: '2017-05-07',
          end: '2017-05-10'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2017-05-09T16:00:00'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2017-05-16T16:00:00'
        },
        {
          title: 'Conference',
          start: '2017-05-11',
          end: '2017-05-13'
        },
        {
          title: 'Meeting',
          start: '2017-05-12T10:30:00',
          end: '2017-05-12T12:30:00'
        },
        {
          title: 'Birthday Party',
          start: '2017-05-13T07:00:00'
        },
        {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2017-05-28'
        }
      ],
    }
  }

  render() {
    const date = new Date();
    return (
      <div id="calendar-view-component">
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
          dayClick={function () {
            alert('日付クリックイベント');
          }}
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

export default CalendarViewComponent