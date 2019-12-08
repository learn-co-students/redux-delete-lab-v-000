export const addBand = name => {
  return {
    type: 'ADD_BAND',
	name
  }; //creates a copy of the object 
};

export const deleteBand = bandId => {
  return {
    type: 'DELETE_BAND',
    bandId
  };
};