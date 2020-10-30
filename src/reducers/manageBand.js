import uuid from 'uuid'

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    //if i see ADD_BAND 
    case 'ADD_BAND':
      //create instance band set to obj, with a new id that i provide, and name that's given in action
      const band = {id: uuid(), name: action.name}
      //i'll RETURN obj with PREVIOUS STATE, bands: set to PREVIOUS STATE.bands(bands already present), band(the new band) ^^
      return { ...state, bands: [...state.bands, band] }
    case 'DELETE_BAND':
      // when I see DELETE_BAND
        // create a bands variable that filters out the band.ids that DONT match with the action's id
      const bands = state.bands.filter(band => band.id !== action.id)
        //return all bands that don't match action.id
      return { bands }
    default:
      return state;
  }
};

// Reducer Rules:
// 1. take current state and action as args
// 2. decides how to update state based on action
// 3. returns new state - IMMUTABLY
// 4. can't modify existing state
// 5. can't produce side effects / async logic



//reducers are like EVENT LISTENERS - TAKE ACTION according to which action was dispatched



// manageBand is reducer that takes in *current state* if not state provided, set to obj bands: [empty arr]
 

