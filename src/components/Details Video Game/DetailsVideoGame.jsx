import React from 'react'
import { useLocation } from 'react-router-dom'
import './DetailsVideoGame.css'
export default function DetailsVideoGame() {
    const location = useLocation()
    const dataGame = location.state
    return (
        <div id='game-detials'>
            <div className='image' style={{ backgroundImage: `url(${dataGame.backGround})` }} />
            <div className="detials">
               <div className="text">
               <h1 className='title'>{dataGame.title}</h1>
                <h2 className='type'>type game:<span>{dataGame.type}</span></h2>
                <h2 className='price'>cost game:<span>{dataGame.price}$</span></h2>
                <h2 className='year'>creation year:<span>{dataGame.year}</span></h2>
               </div>
               <div className="buttons">
                    <button>Buy Now</button>
               </div>
            </div>
        </div>
    )
}
