import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateNewTitle, updateTitle } from '../actions/titleActions';

const TitleForm = (props) => {
   
    
    return(<div>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={props.newTitle}
            onChange={(e)=>props.updateNewTitle(e.target.value)}
          />
          <button
            onClick={()=>props.updateTitle(props.newTitle)}>
            Update title
          </button>
        </div>);
}


function mapStateToProps(state) {
  console.log("tried to reach store")
  return {
    newTitle: state.title.newTitle,
    title: state.title.title
  }
}

export default connect(mapStateToProps, {updateNewTitle, updateTitle})(TitleForm);