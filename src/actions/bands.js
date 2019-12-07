export const addBand = band => {
  return {
    type: 'ADD_BAND',
	band
  }; //creates a copy of the object 
};

export const deleteBand = bandId => {
  return {
    type: 'DELETE_BAND',
    bandId
  };
};