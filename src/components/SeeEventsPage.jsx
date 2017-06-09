import React from 'react'
import injectSheet from 'react-jss'

import 'react-big-calendar/lib/css/react-big-calendar.css'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';


const styles = {
  root: {
    height: '500px',
    maxWidth: '1170px',
    margin: '0 auto',
  }
}

BigCalendar.momentLocalizer(moment);


class SeeEventsPage extends React.Component {
  componentDidMount() {
    fetch('http://unitedcor.org/admin/events/in/cheyenne', {
      method : 'GET',
      mode: 'no-cors',
    }).then(res => {
      res.text()
      console.log('Pre-response: ', res)
    }).then(res => {
      console.log('Final response: ', res)
    })
  }

  render() {
    const { classes } = this.props
    return(
      <div className={classes.root}>
        <BigCalendar
          events={[
            {
            'title': 'Event 1',
            'allDay': true,
            'start': '2017, 6, 26',
            'end': '2017, 6, 26',
          },
          {
            'title': 'Event 2',
            'allDay': true,
            'start': '2017, 6, 22',
            'end': '2017, 6, 22',
          },
          {
            'title': 'Event 3',
            'allDay': true,
            'start': '2017, 7, 22',
            'end': '2017, 7, 22',
          }
          ]}
        />
      </div>
      )
  }
}


export default injectSheet(styles)(SeeEventsPage)
