import React from 'react';
import './App.css';
import Routes from "./Routes.js";
import Break from './components/Break/index.js'
import Session from './components/Session/index.js'
import Timer from './components/Timer/index.js'

<<<<<<< HEAD
function App() {
  return (<div className="App">
    <header className="App-header">
      <h1 className="app-title">
        Pomodoro Clock
      </h1>
    </header>
    <Pomodoro/>
    <footer></footer>
  </div>);
}
class Pomodoro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      break: 5,
      session: 25,
      active: false,
      start: 0,
      end: 0,
      timer: 0
    };
  }
  decrementTime = (element, elementName) => {
    if (element > 1) {
      this.setState((prevState, props) => {
        return {
          elementName: --prevState[elementName]
        }
      });
    }
  }
  incrementTime = (element, elementName) => {
    this.setState((prevState, props) => {
      return {
        elementName: ++prevState[elementName]
      }
    });
  }
  playPause = () => {
    this.setState({
      active: !this.state.active,
      start: Date.now(),
      end: (this.state.session * 60000) + Date.now(),
      timer: (this.state.end - Date.now()) / 60000
    })
    this.update();
  }
  update = () => {
    if (this.state.active) {
      let incomplete = (this.state.end - Date.now());
      if (!incomplete) {
        return;
      }
      this.setState({
        timer: Math.floor(incomplete / 1000)
      });
    }
    window.requestAnimationFrame(this.update);
  };
  reset = () => {
    this.setState({
      active: false,
      start: 0,
      end: 0,
      timer: 0
    });
  }
  render() {
    return (<main>
      <Break break={this.state.break} decrementTime={this.decrementTime} incrementTime={this.incrementTime}/>
      <Session session={this.state.session} decrementTime={this.decrementTime} incrementTime={this.incrementTime}/>
      <Timer break={this.state.break} session={this.state.session} active={this.state.active} then={this.props.then} playPause={this.playPause} timer={this.state.timer} update={this.update} reset={this.reset}/>
    </main>);
  }
}
class Break extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleClick = (e) => {
    e.target.innerText === '-'
      ? this.props.decrementTime(this.props.break, 'break')
      : this.props.incrementTime(this.props.break, 'break')
  }
  render() {
    return (<div>
      <label id="break-label">
        <h2>Break Length</h2>
      </label>
      <button id="break-decrement" onClick={this.handleClick}>-</button>
      <span id="break-length">{this.props.break}</span>
      <button id="break-increment" onClick={this.handleClick}>+</button>
    </div>);
  }
}
||||||| merged common ancestors
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 class="app-title">
          Pomodoro Clock
        </h1>
      </header>
      <main>
        <Break></Break>
        <Session></Session>
      </main>
      <footer>
      </footer>
    </div>
  );
}

class Break extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       value: 5,
     };
   }
   render(){
     return(
       <div>
         <label id="break-label">
           <span>"Break Length"</span>
         </label>
         <button id="break-decrement"></button>
         <span id="break-length">{this.state.value}</span>
         <button id="break-increment"></button>
       </div>
     );
   }
}
=======
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      breakTimeMinutes: 5,
      breakTimeSeconds: 10,
      sessionTimeMinutes: 25,
      sessionTimeSeconds: 10
    }
  }

  decrementBreakTimeMinutes = () => {
    if (this.state.breakTimeMinutes > 0) {
      this.setState({breakTimeMinutes: this.state.breakTimeMinutes - 1})
    }
  }
>>>>>>> master

<<<<<<< HEAD
class Session extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleClick = (e) => {
    e.target.innerText === '-'
      ? this.props.decrementTime(this.props.session, 'session')
      : this.props.incrementTime(this.props.session, 'session')
  }
  render() {
    return (<div>
      <label id="session-label">
        <h2>Session Length</h2>
      </label>
      <button id="session-decrement" onClick={this.handleClick}>-</button>
      <span id="session-length">{this.props.session}</span>
      <button id="session-increment" onClick={this.handleClick}>+</button>
    </div>);
  }
}
||||||| merged common ancestors
class Session extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       value: 25,
     };
   }
   render(){
     return(
       <div>
         <label id="session-label">
           <span>"Session Length"</span>
         </label>
         <button id="session-decrement"></button>
        <span id="session-length">{this.state.value}</span>
         <button id="session-increment"></button>
       </div>
     );
   }
}
=======
  playPause = (e) => {
    console.log(e.target, Date.now());
  }

  incrementBreakTimeMinutes = () => {
    // if (this.state.breakTimeMinutes < this.state.sessionTimeMinutes) {
      this.setState({breakTimeMinutes: this.state.breakTimeMinutes + 1})
    // }
  }

  decrementBreakTimeSeconds = () => {
    if (this.state.breakTimeSeconds > 0) {
      this.setState({breakTimeSeconds: this.state.breakTimeSeconds - 1})
    }
  }

  incrementBreakTimeSeconds = () => {
    if (this.state.breakTimeSeconds < 59) {
      this.setState({breakTimeSeconds: this.state.breakTimeSeconds + 1})
    }
  }
>>>>>>> master

<<<<<<< HEAD
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  displayTime = (time) => {
    if (time < 10) {
      return '0' + time;
    } else {
      return time;
    }
  }
  render() {
    const seconds = this.props.timer % 60;
    const minutes = Math.floor(this.props.timer / 60);

    return (<div>
      <label id="timer-label">
        <h2>Session</h2>
      </label>
      <h3 id="time-left">{`${this.displayTime(minutes)}:${this.displayTime(seconds)}`}</h3>
      <button id="start_stop" onClick={this.props.playPause}>Play / Pause</button>
      <button id="reset" onClick={this.props.reset}>Reset</button>
    </div>);
  }
}
||||||| merged common ancestors
=======
  decrementSessionTimeMinutes = () => {
    // if (this.state.sessionTimeMinutes > this.state.breakTimeMinutes) {
      this.setState({sessionTimeMinutes: this.state.sessionTimeMinutes - 1})
    // }
  }

  incrementSessionTimeMinutes = () => {
    this.setState({sessionTimeMinutes: this.state.sessionTimeMinutes + 1})
  }

  decrementSessionTimeSeconds = () => {
    if (this.state.sessionTimeSeconds > 0) {
      this.setState({sessionTimeSeconds: this.state.sessionTimeSeconds - 1})
    }
  }

  incrementSessionTimeSeconds = () => {
    if (this.state.sessionTimeSeconds < 59) {
      this.setState({sessionTimeSeconds: this.state.sessionTimeSeconds + 1})
    }
  }

  render() {
    return (
      <div className="App">
        <main>
          <Break
            breakTimeMinutes={this.state.breakTimeMinutes}
            decrementBreakTimeMinutes={this.decrementBreakTimeMinutes}
            incrementBreakTimeMinutes={this.incrementBreakTimeMinutes}
            breakTimeSeconds={this.state.breakTimeSeconds}
            decrementBreakTimeSeconds={this.decrementBreakTimeSeconds}
            incrementBreakTimeSeconds={this.incrementBreakTimeSeconds}
            >
          </Break>
          <br/>
          <Session
            sessionTimeMinutes={this.state.sessionTimeMinutes}
            decrementSessionTimeMinutes={this.decrementSessionTimeMinutes}
            incrementSessionTimeMinutes={this.incrementSessionTimeMinutes}
            sessionTimeSeconds={this.state.sessionTimeSeconds}
            decrementSessionTimeSeconds={this.decrementSessionTimeSeconds}
            incrementSessionTimeSeconds={this.incrementSessionTimeSeconds}
          >
          </Session>
          <Timer playPause={this.playPause}/>
        </main>
      </div>
    );
  }
}
>>>>>>> master

export default App;
