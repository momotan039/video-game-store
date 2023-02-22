export default function VideoGame({data}){
    return <div className="game">
        <h3 className="title">{data.title}</h3>
        <img src={data.backGround}/>
        <span className="year">{data.year}</span>
    </div>
}