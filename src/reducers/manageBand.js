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
			console.log(band);
			// return { ...state, bands: [ ...state.bands, action.name ] };
			return { bands: state.bands.concat(band) };

		default:
			return state;
	}
}
