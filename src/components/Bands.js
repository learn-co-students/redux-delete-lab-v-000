import React, { Component } from "react";
import Band from "./Band";

const Bands = props => {
  const bandsList = props.bands.map(band => (
    <Band key={band.id} {...band} deleteBand={props.deleteBand} />
  ));
  return <div>{bandsList}</div>;
};

export default Bands;
