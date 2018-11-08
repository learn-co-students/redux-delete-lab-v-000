import React, { Component } from 'react';
import { connect } from 'react-redux'

const Band = (props) => {

    return (
        <div>
            <li>{props.bandName}</li>
            <button onClick={() => props.delete(props.id)}> DELETE </button>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
  delete: formData => dispatch({type: 'DELETE_BAND', id: formData})
})


export default connect(null, mapDispatchToProps)(Band);
