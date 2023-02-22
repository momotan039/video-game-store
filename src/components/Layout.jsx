import { Link, Outlet } from "react-router-dom";
import Header from "./header/Header";

export default function Layout(){
    return <>
      <h1>Video Game store</h1>
    <Header/>
    <Outlet/>
    </>
}