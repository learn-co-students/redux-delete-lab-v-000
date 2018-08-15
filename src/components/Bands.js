import React, { Component } from 'react';


class Bands extends Component {

  render() {
    const props=this.props
    return(
      <div>
        <ul>
        {this.props.bands.map(band => {
            return (
                <li><p key={band.id}>{band.name}</p><button onClick={props.delete(band.id)}>DELETE</button></li>
            )
        })}
        </ul>
      </div>
    );
  }
};

export default Bands;