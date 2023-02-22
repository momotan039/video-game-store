import VideoGame from './VideoGame'
import  './VideoGames.css'
export default function VideoGames() {
    const games=[{
        "type": "Ps1",
        "price": 35,
        "title": "Air Hockey (Hooockey!!)",
        "year": 2003,
        "backGround": "https://romsfun.com/wp-content/uploads/2019/08/Air-Hockey-0-300x300.jpg",
        "id": "5"
      },
      {
        "type": "Ps3",
        "price": 35,
        "title": "Honoo no Ryourinin – Cooking Fighter Hao",
        "year": 1998,
        "backGround": "https://romsfun.com/wp-content/uploads/2019/09/SLPS-01382.jpg",
        "id": "6"
      },
      {
        "type": "Ps1",
        "price": 35,
        "title": "Crash Bandicoot",
        "year": 1996,
        "backGround": "https://romsfun.com/wp-content/uploads/2019/09/220px-Crash_Bandicoot_Cover.png",
        "id": "7"
      },
      {
        "type": "Ps1",
        "price": 35,
        "title": "Final Fantasy VIII",
        "year": 1999,
        "backGround": "https://romsfun.com/wp-content/uploads/2019/09/220px-Final_Fantasy_8_ntsc-front.jpg",
        "id": "8"
      },
      {
        "type": "Ps1",
        "price": 35,
        "title": "Tomb Raider 2",
        "year": 1997,
        "backGround": "https://romsfun.com/wp-content/uploads/2019/09/Tomb_Raider_II.png",
        "id": "9"
      },
      {
        "type": "Ps1",
        "price": 35,
        "title": "Jackie Chan Stuntmaster",
        "year": 2000,
        "backGround": "https://romsfun.com/wp-content/uploads/2019/09/220px-JackieChanStuntmaster-1.jpg",
        "id": "10"
      }]
    return <div className="games">
        {
            games.map((g,i)=>{
                return <VideoGame data={g} key={i}/>
            })
        }
    </div>
}