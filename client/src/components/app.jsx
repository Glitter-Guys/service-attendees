//app.jsx
import React from 'react';
import Attendees from './Attendees.jsx';
import mockData from '../../../mockData';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          numberOfAttendees: mockData.length,
          eventUsers: mockData
        }
    }

    componentDidMount() {
      this.getAttendees();
    }


    getAttendees() {
      // const url = window.location.href;
      // const urlEnd = url.split('/event/')[1];
      // const eventId = urlEnd.split('/')[0];
      const eventId = 'qvbnvkyxgbcb'
      axios.get(`/api/event/${eventId}`)
        .then((res) => {
          console.log('res', res)
          this.state.eventUsers = res.data;
          this.state.numberOfAttendees = res.data.length;
          this.setState((state) => ({
            eventUsers: this.state.eventUsers,
            numberOfAttendees: this.state.numberOfAttendees,
          }))
        })
        .catch((err) => {
          throw err;
      })
    }


    render() {
      console.log(this.state.eventUsers)
      return (
        <div className="app">
        <div className="attendees_header"> 
        <div className="attendees_count"> Attendees {'(' + this.state.numberOfAttendees + ')'} </div>
        <div className="seeAll"> See All </div>
        </div>
        <Attendees eventUsers={this.state.eventUsers} />
        </div>
        )
    }
}

export default App;



