import React, { Component } from "react";
import BandInput from "./BandInput";
import Band from "./Band";

import { connect } from "react-redux";

class BandsContainer extends Component {
  renderBands = () =>
    this.props.bands.map(band => (
      <Band id={band.id} text={band.name} delete={this.props.delete} />
    ));
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand} />
        {this.renderBands()}
      </div>
    );
  }
}

const mapStateToProps = ({ bands }) => ({ bands });

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  delete: bandName => dispatch({ type: "REMOVE_BAND", id: bandName })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BandsContainer);
