import React from 'react'
import {Link} from 'wouter'
//import Fav from 'components/Fav'
import './Release.css'

export default function Release ({ message, id, image, author, likes, create_at, location, status }) {
  return (
    <div className="instagram-card">
        <div className="instagram-card-header">
            <img src={image} className="instagram-card-user-image"/>
            <a className="instagram-card-user-name">{author}</a>
        </div>

        <div className="intagram-card-image">
            <img src={image} className="intagram-card-inside-image"/>
        </div>

        <div className="instagram-card-content">
            <p ><span className="likes">
            <img src="https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=6&m=1209654046&s=170667a&w=0&h=pSqRP_IkTHPFy-S2-FiY_9yJknI3_MklWgZY06bGh4s=" className="instagram-card-user-image-mini" width="24" height="24px"/> Le gusta a</span> {likes}</p>
            <p > {author } <span className="instagram-card-content-user">{ message}</span></p>
            
        </div>

        <div className="instagram-card-footer">
            <div className="instagram-card-time">{create_at}</div>
        </div>
    </div>

  )
}
