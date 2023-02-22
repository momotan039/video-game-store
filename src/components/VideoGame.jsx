import { Link } from "react-router-dom";

export default function VideoGame({data}){
    return <div className="game">
        <Link state={data} to={'/game-details/'+data.title}>
        <h3 className="title">{data.title}</h3>
        <img src={data.backGround}/>
        <span className="year">{data.year}</span>
        </Link>
    </div>
}