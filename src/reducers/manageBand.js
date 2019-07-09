export default function manageBand(
	state = {
		bands: []
	},
	action
) {
	console.log(action);

	switch (action.type) {
		case 'ADD_BAND':
			const band = {
				id: Math.random() * 10000000000000000,
				bandName: action.name
			};
			console.log('ADD_BAND:', band);
			// debugger;
			// return { ...state, bands: [ ...state.bands, action.name ] };
			return { bands: state.bands.concat(band) };

		case 'DELETE_BAND':
			return {
				bands: state.bands.filter((band) => {
					// debugger;
					band.id !== action.id;
				})
			};

		default:
			return state;
	}
}
