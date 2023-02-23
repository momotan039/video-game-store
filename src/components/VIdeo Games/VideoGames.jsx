import { useLocation } from 'react-router-dom'
import VideoGame from './VideoGame'
import  './VideoGames.css'
export default function VideoGames() {
  const location=useLocation()
  const games=location.state??[]
    return <div className="games">
        {
          games.length>0?
            games.map((g,i)=>{
                return <VideoGame data={g} key={i}/>
            })
            :<h1>all Games...</h1>
        }
    </div>
}