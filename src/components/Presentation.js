import React from 'react'
import './styles.css'
import image from './image.jpg'

export const Presentation = () => {
  return (
    
    <div className="personal-info">
        <img className='profile-img' src={image}></img>
        <h1>Ariel Vargas</h1>
        <p class="email">arivarcal@gmail.com</p>
        <p class="phone">+591 69473826</p>
    </div>

  )
}
