import React, { Component } from 'react';
import { connect } from 'react-redux'
import { writeChannel, addChannel} from '../store'


function mapStateToProps(state){
  return {
    newChannelName : state.newChannelName
  }
}

function mapDispatchToProps(dispatch){
  return {
    handleChange : function(event){
      dispatch(writeChannel(event.target.value))
    },
    handleSubmit : function(event) {
        event.preventDefault();
        const channelName = event.target.channelName.value;
        dispatch(addChannel(channelName));
    }
  }
}

const ourMapping = connect(mapStateToProps, mapDispatchToProps)
const NewChannelContainer = ourMapping(NewChannelEntry)
export default NewChannelContainer

function NewChannelEntry (props) {
  return (
    <form onSubmit = {props.handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Create a Channel</label>
        <input onChange={props.handleChange} value={props.newChannelName} className="form-control" type="text" name="channelName" placeholder="Enter channel name" required />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-default">Create Channel</button>
      </div>
    </form>
  );
}

/** Write your `connect` component below! **/
