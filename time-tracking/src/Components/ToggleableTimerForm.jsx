import React, { Component } from 'react'
import {CgAdd} from 'react-icons/cg'
import TimerForm from './TimerForm'
export default class ToggleableTimerForm extends Component {
    state={
        isOpen:false,    
    }     
    handleFormOpen=()=>{
        this.setState({isOpen:true})
    }
    handleFormClose = ()=>{
        this.setState({isOpen:false})
    }
    handleFormSubmit=(timer)=>{
        this.props.onFormSubmit(timer)
        this.setState({isOpen:false})
    }
    // constructor(props){
    //     super();
        
    //     this.handleFormOpen = this.handleFormOpen.bind(this)
    // }

    render() {
      if(this.state.isOpen){
          return (
              <TimerForm 
              onFormSubmit={this.handleFormSubmit}
              onFormClose={this.handleFormClose}
              />
          )
    } else {
          return (
            <div className='w-72 h-52 border flex justify-center items-center'>
                <button
                onClick={this.handleFormOpen}
                >
                 <CgAdd 
                    />
                </button>
            </div>
          )
      }
  }
}
