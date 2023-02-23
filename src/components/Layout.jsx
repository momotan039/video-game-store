import { useState,useEffect,useMemo} from "react";
import { Link, Outlet } from "react-router-dom";
import { getGames } from "../utils/crud.mjs";
import Header from "./header/Header";
import VideoGames from "./VIdeo Games/VideoGames.jsx";

export default function Layout(){
  const [games, setGames] = useState([]);

  useEffect(() => {
    getGames().then((games)=>setGames([...games]))
  }, []);
    return <>
    <Header games={games}/>
    <Outlet/>
    </>
}