import React from 'react';
import Band from "./Band";

const Bands = ({ bands, deleteBand }) => {

    const bandcard = bands.map(band =>
      <Band key={band.id}
            band={band}
            deleteBand={deleteBand} />)
  return (
    <div>
      {bandcard}
    </div>
  );

};

export default Bands;
