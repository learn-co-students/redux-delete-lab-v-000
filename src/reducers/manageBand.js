export default function manageBand(
	state = {
		bands: []
	},
	action
) {
	console.log(action);

	switch (action.type) {
		case 'ADD_BAND':
			const newBand = {
				name: action.payload.name
			};
			return { ...state, bands: [ ...state.bands, action.name ] };

		default:
			return state;
	}
}
