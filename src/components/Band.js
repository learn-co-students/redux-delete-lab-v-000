import React from 'react';

const Band = ({band, deleteBand }) =>

<div>

<li>  {band.name} </li>
<button onClick={() => deleteBand(band.id)}> DELETE </button>
< br/>

</div>

  export default Band;
