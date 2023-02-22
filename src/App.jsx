import {  createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import './App.css'
import Body from './components/Body'
import DetailsVideoGame from './components/Details Video Game/DetailsVideoGame'
import VideoGames from './components/VideoGames'

function App() {
const router=createBrowserRouter([
  
 {
  children:[
    {
      path:'/',
      element:<Body/>
    },
    {
      path:'/videoGameDetials',
      element:<DetailsVideoGame/>
    },
    {
      path:'*',
      element:(<h1>not found page 404</h1>)
    },
  ]
 }
])
  return (
    <div className="App">
      <h1>Video Game store</h1>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
