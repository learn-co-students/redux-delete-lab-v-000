import React from 'react';

const Band = props => <li>{props.band.name} <button onClick={() => props.delete(props.band.id)}>Delete Band</button></li>

export default Band;
