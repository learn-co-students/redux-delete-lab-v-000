import React, { Component } from 'react';


const Band = props => <li><span>{props.band.name}</span><button onClick={() => props.deleteBand(props.band.id)}>DELETE</button></li>


export default Band
