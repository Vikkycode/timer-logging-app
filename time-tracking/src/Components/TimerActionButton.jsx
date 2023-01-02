import React, { Component } from 'react'

export default class TimerActionButton extends Component {
  render() {
      if(this.props.timerIsRunning){
          return(
              <div>
                  <button
                  className='text-red-800 py-2 text-xl w-full border border-2 border-green-800 bottom-0'
                  onClick={this.props.onStopClick}
                  >Stop</button>
              </div>
          )
      }else {
          return (
            <div>
                  <button
                  className='text-green-800 py-2 text-xl w-full border border-2 border-green-800 bottom-0'
                  onClick={this.props.onStartClick}
                  >Start</button>
              </div>
          )
      }
  }
}
