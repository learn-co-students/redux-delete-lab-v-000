export const addBand = (name) => {
  return { type: 'ADD_BAND', name }
}


export const removeBand = (bandId) => {
  return { type: 'DELETE_BAND', id: bandId }
}
