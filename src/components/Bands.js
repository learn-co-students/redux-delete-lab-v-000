import React from 'react';
import Band from './Band';

const Bands = props => {
  // console.log(props)
  const bands = props.bands.map(band => {
    return <Band delete={props.delete} key={band.id} band={band}/>;
  });

  return (
    <div>
      {bands}
    </div>
  );

};

export default Bands;
