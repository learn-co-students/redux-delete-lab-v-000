// import React, { Component } from 'react';
import React from 'react';
import Band from './Band.js';

// export default class Bands extends Component {

// }

const Bands = props => {
  return (
    <div>
      <h3>Bands:</h3>
      <ul>
        {props.bands.map(
          // ({ name, id }) => <Band name={name} key={id} /> (That works b/c of ES6, but it may be less readable. Update: That would have failed the tests, anyway.)
          // band => <Band bandInfo={band} key={band.id} /> (The tests are picky; I need to name the prop 'band', not 'bandInfo'.)
          band => <Band band={band} key={band.id} deleteBand={props.deleteBand} />
        )}
      </ul>
    </div>
  );
}

export default Bands;