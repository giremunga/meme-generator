import React from 'react'
import memesData from "../memesData.jsx"
import { useState } from 'react'
import { useEffect } from 'react'

const Meme = () => {
    
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemes, setAllMemes] = useState(memesData)

    
    




    function getMemeImage() {
        const memesArray = allMemes.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(memesArray[randomNumber].url)
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    
  return (
    <div>
      <main>
            <div className='form'>
                <input  className='form--input' type='text' placeholder='top text'
                value={meme.topText}
                onChange={handleChange}
                
                />
                <input  className='form--input' type='text' placeholder='bottom text'
                value={meme.topText}
                onChange={handleChange}
                
                />
                
                
                <button 
                className='form--button'
                onClick={getMemeImage}
                
                >Get a new meme image 🖼</button>
            </div>
            <div className='meme'>
                <img src={meme.randomImage}  className='meme--image'/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>

            </div>
            
        </main>
    </div>
  )
}

export default Meme
