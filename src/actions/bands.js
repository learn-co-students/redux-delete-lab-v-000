export const addBand = name => {
  // console.log("action addBand (name):",  name)
  return {
    type: 'ADD_BAND',
    name
  }
}

export const deleteBand = id => {
  // console.log("action deleteBand (id)", id)
  return {
    type: 'DELETE_BAND',
    id
  }
}
