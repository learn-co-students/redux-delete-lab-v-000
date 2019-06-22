export const addBand = name => {
  console.log("action add band creator (name):",  name)
  return {
    type: 'ADD_BAND',
    name
  }
}

export const deleteBand = id => {
  console.log("action DeleteBand (id)", id)
  return {
    type: 'DELETE_BAND',
    id
  }
}
