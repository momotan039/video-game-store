import { useState, useEffect, useMemo } from "react";
import { Outlet} from "react-router-dom";
import { getGames } from "../utils/crud.mjs";
import Header from "./header/Header";
import GridSpinner from "./spinner/GridSpinner.jsx";

export default function Root() {
  const [games, setGames] = useState();
  useEffect(() => {
    getGames().then((games) => {
      setGames([...games])
      debugger
     history.pushState(games,'stam')
    });
  }, []);

  return (
    <>
      {
      games ? 
         <>
         <Header games={games}/>
         <Outlet />
       </>
      : 
        <GridSpinner/>
      }
    </>
  );
}
