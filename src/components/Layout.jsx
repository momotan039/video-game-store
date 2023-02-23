import { useState,useEffect,useMemo} from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "./header/Header";

export default function Layout(){

  const [games, setGames] = useState([]);

  const fetchData = async () => {
    const response = await fetch('https://627a44364a5ef80e2c16e872.mockapi.io/VedioGames');
    const data = await response.json();
    debugger
    setGames(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const memoizedData = useMemo(() => games, [games]);
debugger
    return <>
      <h1>Video Game store</h1>
    <Header  games={memoizedData}/>
    <Outlet/>
    </>
}