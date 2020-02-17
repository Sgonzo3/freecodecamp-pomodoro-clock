import React from 'react'

class Break extends React.Component {
   constructor(props) {
     super(props);
   }

   render(){
     return(
       <div>
         <label id="break-label">
           <span>"Break Length"</span>
         </label>
         <br/>
         <button
          id="break-decrement"
          onClick={this.props.decrementBreakTimeMinutes}
          > -
          </button>
         <span id="break-length">{this.props.breakTimeMinutes} minutes</span>
         <button
          id="break-increment"
          onClick={this.props.incrementBreakTimeMinutes}
         > +
         </button>
         <br/>
         <button
          onClick={this.props.decrementBreakTimeSeconds}
          > -
          </button>
         <span>{this.props.breakTimeSeconds} seconds</span>
         <button
          onClick={this.props.incrementBreakTimeSeconds}
         > +
         </button>

       </div>
     );
   }
}

export default Break
