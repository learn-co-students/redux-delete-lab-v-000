import React from 'react';

const Band = props => {

  console.log('in Band', props);

  const band = props.bands.map((band, id) => {
    return <li key={id}>{band.bandName}</li>;
  });

  return (
    <div>
      {band}
    </div>
  );
}



export default Band;
