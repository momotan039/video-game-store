import { useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const nav=useNavigate()
  useEffect(()=>{
      nav('/admin-dashboard/manage-games')
  },[])
  return (
    <>
      <Link to="/admin-dashboard/manage-games">
        <button>Show All Games</button>
      </Link>

      <Link to="/admin-dashboard/add">
        <button>Add new game</button>
      </Link>
      
      <Outlet />
    </>
  );
}
