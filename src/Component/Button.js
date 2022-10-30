import React from 'react'

const Button = (props) => {
  return (
    <button onClick={props.fun} className="btn btn-primary">{props.name}</button>
  )
}

export default Button