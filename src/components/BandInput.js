import React, { Component } from 'react';
import { connect } from 'react-redux';
import { type } from 'os';

class BandInput extends Component {
	state = {
		bandName: ''
	};

	handleOnChange(event) {
		this.setState({
			bandName: event.target.value
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
					<input type="text" value={this.state.text} onChange={(event) => this.handleOnChange(event)} />
					<input type="submit" />
				</form>
			</div>
		);
	}
}

// const mapDispatchToProps = (dispatch) => ({
// 	addTodo: (formData) => dispatch({ type: 'ADD_TODO', payload: formData })
// });

const mapDispatchToProps = (dispatch) => ({
	addBand: (name) => dispatch({ type: 'ADD_BAND', name })
});

export default connect(null, mapDispatchToProps)(BandInput);

// export default BandInput;
