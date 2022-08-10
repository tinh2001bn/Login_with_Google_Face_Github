import React from 'react'

const Card = ({post}) => {
  return (
    <div className='card'>
    <span className="title">{post.title}</span>
    <img src={post.img} alt="" className="img" />
    <p className="desc">{post.desc}</p>
    <button className='CardButton'>Read more</button>
    </div>
  )
}

export default Card