import { useLocation } from 'react-router-dom'
import { GAMES } from '../../utils/crud.mjs'
import VideoGame from './VideoGame'
import  './VideoGames.css'
export default function VideoGames() {
  // const location=useLocation()
  // const games=location.state??[]
  const games=GAMES
    return <div className="games">
        {
         games.map((g,i)=>{
          return <VideoGame data={g} key={i}/>
      })
        }
    </div>
}