import React, { Component } from 'react'
import {BiEdit} from 'react-icons/bi'
import {FaTrashAlt} from 'react-icons/fa'
export default class TimerForm extends Component {
    state={
        title:this.props.title || '',
        project:this.props.project || '',
    }

    handleTitleChange = (e)=>{
        this.setState({title:e.target.value})
    }
    handleProjectChange = (e)=>{
        this.setState({project:e.target.value})
    }
    handleSubmit =()=>{
        this.props.onFormSubmit({
            id:this.props.id,
            title:this.state.title,
            project:this.state.project,
        })
    }

  render() {
      const submitText = this.props.id ? 'Update':'Create';
    return (
        <div className='flex w-72 h-60 pt-2  border flex-col justify-center items-center'>
        <div className='space-y-5'>
                <div className='flex flex-col space-y-2'>
                    <label>Title</label>
                    <input type='text' 
                    className='border-2 py-2 px-2 rounded-md'
                    value={this.state.title} 
                    onChange={this.handleTitleChange}
                    />
                </div>
                <div className='flex flex-col space-y-2'>
                    <label>Project</label>
                    <input type='text' 
                     className='border-2 py-2 px-2 rounded-md'
                    value={this.state.project} 
                    onChange={this.handleProjectChange}/>
                </div>
            </div>
            <div className=' flex text-xl w-full mt-4 border border bottom-0'>
                <button className='border border-blue-800 py-2 px-9 text-blue-800 rounded-l-md'
                onClick={this.handleSubmit}>{submitText}</button>
                <button className='border  border-red-800 py-2 px-10 text-red-800 rounded-r-md'
                onClick={this.props.onFormClose}>Cancel</button>
            </div>
        
    </div>
    )
  }
}
