import React, { Component } from 'react';
import Band from './Band'

class Bands extends Component {
  render() {
    const bandList = this.props.store.getState().bands.map((band, index) => {
      return <Band band={band}
                  key={index}
                  store={this.props.store}
              />
    });

    return(
      <div>
        <h3> Band List </h3>
        <ul>
          {bandList}
        </ul>
      </div>
    );
  }
};

export default Bands;
