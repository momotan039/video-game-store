import { useState, useEffect, useMemo } from "react";
import { Outlet} from "react-router-dom";
import { DeleteGame, getGames } from "../utils/crud.mjs";
import { rootRefs } from "../utils/local.mjs";
import Header from "./header/Header";
import GridSpinner from "./spinner/GridSpinner.jsx";

export default function Root() {
  const [games, setGames] = useState();

  rootRefs.reCallData=async()=>{
    const gms= await getGames()
    setGames(gms)
    history.pushState(gms,'stam')
    return gms
  }

  useEffect(() => {
    rootRefs.reCallData()
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
