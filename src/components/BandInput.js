import React, { Component } from 'react';
import Band from './Band';

class BandInput extends Component {

  state = {
    bandName: ''
  }

  renderBands = () => {
    return this.props.bands.map(band => <Band key={band.id} band={band} delete={this.props.delete}/>)
  }

  handleOnChange(event) {
    this.setState({
      bandName: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addBand(this.state.bandName);
    this.setState({
      bandName: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            value={this.state.text}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
        {this.renderBands()}
      </div>
    );
  }
};

export default BandInput;
