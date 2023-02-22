import {  BrowserRouter, createBrowserRouter, createRoutesFromElements, Link, Outlet, Route, RouterProvider, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import DetailsVideoGame from './components/Details Video Game/DetailsVideoGame'
import VideoGames from './components/VideoGames'

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
      <Route path='/admin' element={<h1>Admin</h1>}/>
      <Route path='/game-details/:name' element={<DetailsVideoGame/>}/>
    </Route>
  )
)
console.log(router);
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
