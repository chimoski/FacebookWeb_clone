import React from 'react'

export const PostError = ({error, setError}) => {
  return (
    <div className='postError'>
        <div>{error}</div>
     <button
     onClick={()=> setError("")}
      className="blue_btn">
        Try again
        </button>   
   </div>
  )
}
