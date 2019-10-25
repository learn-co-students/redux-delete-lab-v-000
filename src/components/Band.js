import React, { Component } from 'react';
import { connect } from 'react-redux';

class Band extends Component {

  render() {

      let bands = this.props.bands.map(band => <li key={band.id}>{band.bandName}</li>);

    return(
      <div>
        Band Component
        <ul>
          {bands}
        </ul>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return { bands: state.bands }
};

export default connect(
  mapStateToProps
)(Band);
