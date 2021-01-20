import React from 'react'

export const Login = ({value, handleChange}) => {
  return (
    <div>
  
      <input type='text' placeholder='Welcome to Tic-Tac-Toe game' value={value} onChange={handleChange} />
      
    </div>
  )
}
