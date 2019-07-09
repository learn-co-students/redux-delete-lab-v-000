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
				name: action.name
			};
			console.log('ADD_BAND:', band);
			// debugger;
			// return { ...state, bands: [ ...state.bands, action.name ] };
			return { bands: state.bands.concat(band) };

		case 'DELETE_BAND':
			const bands = state.bands.filter((band) => band.id !== action.id);
			// debugger;
			return {
				bands
			};

		default:
			return state;
	}
}
