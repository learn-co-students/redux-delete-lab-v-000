import React, { Component } from 'react';

class Band extends Component {

  render() {

    const { name } = this.props.band 

    return(
        <li>
            { name }
                <button onClick={() => this.props.deleteBand(this.props.band.id)}>
                    DELETE
                </button>
        </li>
    );
  }
}

export default Band;
