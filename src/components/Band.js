import React, { Component } from 'react';

const Band = ({ band, deleteBand }) => {
    return (
      <div>
        <li>
          {band.name}
          <button onClick={ () => deleteBand(band.id)} >
            Delete Band
          </button>
        </li>
      </div>
    )
};

export default Band;
