export const addBand = name => {
  return {
    type: 'ADD_BAND',
	name
  }; //creates a copy of the object 
};

export const deleteBand = id => {
  return {
    type: 'DELETE_BAND',
    id
  };
};