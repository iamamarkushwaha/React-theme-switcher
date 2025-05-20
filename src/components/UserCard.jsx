import React from 'react'


const UserCard = (props) => {
  return (
    <div className='user-card'>
      <div className='user-card-inner'>
        <p id='username'><b>{props.name}</b></p>
        <img id='image' src={props.image} alt={props.name} />
        <p id='disc'>{props.disc}</p>
      </div>

    </div>


  )
}

export default UserCard
