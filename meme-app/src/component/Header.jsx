import React from 'react'
import troll from '../img/troll.png'

const Header = () => {
  return (
    <div>
      <header className='header'>
        <img src={troll} className='header--image'/>
        <h2 className="header--title">Meme Generator</h2>
        <h4 className="header--project">React Course - Project 3</h4>
        
      </header>
    </div>
  )
}

export default Header
