import React from 'react'

function ProfileCard(writter) {
  return (
    <div className='card'>
        <div className='textgroup'>
            <h3>{writter.name}</h3>
            <p>{writter.email}</p>
            <p>{writter.phone}</p>
            <button className='actionBtn'>Read more</button>

        </div>
    </div>
  )
}

export default ProfileCard
