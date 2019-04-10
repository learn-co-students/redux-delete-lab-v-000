import React from 'react'

const Band = props => {
  console.log(props)
  return (
    <div>
      <li>{props.name}</li>
      <button onClick={ () => props.delete(props.id)}>DELETE</button>
    </div>
  )
}

export default Band
