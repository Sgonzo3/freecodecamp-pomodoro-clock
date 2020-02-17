import React from 'react';

class Timer extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       value: 25,
     };
   }
   render(){
     return(
       <div>
         <label id="timer-label">
           <span>Session</span>
         </label>
         <span id="time-left">60:00</span>
         <button id="start_stop"
           onClick={this.props.playPause}
           >Play / Pause</button>
         <button id="reset">Reset</button>
       </div>
     );
   }
}
 export default Timer;
