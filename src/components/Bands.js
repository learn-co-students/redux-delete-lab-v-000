import React from "react";
import Band from "./Band";

const Bands = (props) => (
  <ul>
    {props.bands.map((band) => (
      <Band key={band.id} band={band} deleteBand={props.deleteBand} />
    ))}
  </ul>
);

export default Bands;
