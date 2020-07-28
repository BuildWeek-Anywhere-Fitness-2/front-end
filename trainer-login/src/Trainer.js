import React from 'react'

export default function Trainer(props) {
  const { details } = props

  if (!details) {
    return <h3>Loading...</h3>
  }

  return (
    <div className='member-container'>
      <h2>{details.name}</h2>
      <p>Username: {details.username}</p>
      <p>Email: {details.email}</p>
    </div>
  )
}