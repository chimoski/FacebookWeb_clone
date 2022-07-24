import React from 'react'

export const Contact = ({user}) => {
  return (
    <div className='contact' hover3>
        <div className="contact_img">
        <img  src={user?.pic} alt="" />
        </div>
        <span>
            {user?.firstname} {user?.surname}
        </span>
    </div>
  )
}
