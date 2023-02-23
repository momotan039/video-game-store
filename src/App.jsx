import {  BrowserRouter, createBrowserRouter, createRoutesFromElements, Link, Outlet, Route, RouterProvider, Routes } from 'react-router-dom'
import './App.css'
import ManageGames from './components/admin/ManageGames'
import DetailsVideoGame from './components/Details Video Game/DetailsVideoGame'
import Layout from './components/Layout'
import VideoGames from './components/VIdeo Games/VideoGames'

function App() {
// const router=createBrowserRouter([
//     {
//       path:'/',
//       children:[
//         {
//           path:'',
//           element:<Layout/>
//         },
//         {
//           path:'/store',
//           element:<VideoGames/>
//         },
//         {
//           path:'/admin',
//           element:(<h1>Admin</h1>)
//         },
//       ]
//     },
//     {
//       path:'/game-details',
//       element:<DetailsVideoGame/>
//     },
   
//     {
//       path:'*',
//       element:(<h1>not found page 404</h1>)
//     }
// ])
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<VideoGames/>}/>
      <Route path='/manage-games' element={<ManageGames/>}/>
      <Route path='/game-details/:name' element={<DetailsVideoGame/>}/>
    </Route>
  )
)
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
