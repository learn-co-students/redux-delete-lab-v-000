import React from 'react';

const Band = props => {

  const bands = props.bands.map((band, id) => {
    return <li key={id}>{band.bandName}</li>;
  });

  return (
    <div>
      {bands}
    </div >
  );
}



export default Band;
