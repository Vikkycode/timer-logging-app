import React, { Component } from 'react'
import {BiEdit} from 'react-icons/bi'
import {FaTrashAlt} from 'react-icons/fa'
import helpers from '../helpers'
import TimerActionButton from './TimerActionButton'
export default class Timer extends Component {

  componentDidCatch(){
    this.forceUpdateInterval = setInterval(() => this.forceUpdate(),50);
  }
  
  componentWillUnmount(){
    clearInterval(this.forceUpdateInterval)
  }

  handleStartClick=()=>{
    this.props.onStartClick(this.props.id)
  }
  handleStopClick=()=>{
    this.props.onStopClick(this.props.id)
  }
  handleTrashClick = ()=>{
    this.props.onTrashClick(this.props.id)
  }
  
  render() {
      const elapsedString = helpers.renderElapsedString(this.props.elapsed,this.props.runningSince)
    return (
      <div className='border mx-5 my-5 w-72 pt-5'>
          <div className='px-4'>
            <h1 className='text-xl'>{this.props.title}</h1>
            <p className='text-sm'>{this.props.project}</p>
        </div>
        <div className='text-center'>
            <h2 className='text-3xl pt-2 font-bold'>{elapsedString}</h2>
        </div>
        <div className='flex pt-5 float-right pr-2 pb-2'>
            <span
            onClick={this.handleTrashClick}>
            <FaTrashAlt  />
            </span>
            <span 
            onClick={this.props.onEditClick}>
            <BiEdit />
            </span>
        </div>
        {/* <div className='pt-2'>
            <button className='text-green-800 py-2 text-xl w-full border border-2 border-green-800 bottom-0'>Start</button>
        </div> */}
        <TimerActionButton
        timerIsRunning={!!this.props.runningSince}
        onStartClick={this.handleStartClick}
        onStopClick={this.handleStopClick} />
      </div>
    )
  }
}
