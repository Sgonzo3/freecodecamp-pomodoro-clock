import React, { Component } from 'react';
import ReactCountdownClock from "react-countdown-clock";

export default class AppClock extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <ReactCountdownClock seconds={200}
                     color="#000"
                     alpha={0.9}
                     size={300}
                     timeFormat={"hms"}
                     />
            </div>

          );
    }
}