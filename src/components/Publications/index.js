import React from 'react'
import Release from '../Release'
import './Publications.css'

export default function Publications ({release}) {
    console.log(release)
  return <div className='Publications'>
    {
      release.map(({id, image, message, author, likes, create_at, location, status }) =>
        <Release
          id={id}
          key={id}
          image={image}
          message={message}
          author= {author}
          likes= {likes}
          create_at={create_at}
          location= {location}
          status={status}
        />
      )
    }
  </div>
}