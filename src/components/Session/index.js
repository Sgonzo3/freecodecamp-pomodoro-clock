import React from 'react'

class Session extends React.Component {
   constructor(props) {
     super(props);
   }

   render(){
     return(
       <div>
         <label id="session-label">
           <span>"Session Length"</span>
         </label>
         <br/>
         <button
          id="session-decrement"
          onClick={this.props.decrementSessionTimeMinutes}
         >
           -
         </button>
        <span id="session-length">{this.props.sessionTimeMinutes} minutes</span>
        <button
          id="session-increment"
          onClick={this.props.incrementSessionTimeMinutes}
        >
          +
        </button>
        <br/>
        <button
         onClick={this.props.decrementSessionTimeSeconds}
        >
          -
        </button>
         <span>{this.props.sessionTimeSeconds} seconds</span>
         <button
           onClick={this.props.incrementSessionTimeSeconds}
         >
         +
       </button>
       </div>

     );
   }
}

export default Session
