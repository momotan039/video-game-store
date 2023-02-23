import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './App.css'
import AddGame from './components/admin/controls/AddGame'
import EditGame  from './components/admin/controls/EditGame'
import AdminDashboard from './components/admin/dashboard/AdminDashboard'
import ManageGames from './components/admin/ManageGames'
import DetailsVideoGame from './components/Details Video Game/DetailsVideoGame'
import Home from './components/home/Home'
import Root from './components/Root'
import VideoGames from './components/VIdeo Games/VideoGames'

function App() {
  const router=createBrowserRouter([
      {
        path:'/',
        element:<Root/>,
        children:[
            {
              path:'/',
              element:<Home/>
            },
            {
              path:'/store',
              element:<VideoGames/>
            },
            {
              path:'/admin-dashboard',
              element:<AdminDashboard/>,
              children:[
                {
                  path: "manage-games",
                  element: <ManageGames />,
                },
                {
                  path: "edit",
                  element:<EditGame/>,
                },
                {
                  path: "add",
                  element: <AddGame />,
                },
              ]
            },
            {
              path:'/game-details/:name',
              element:<DetailsVideoGame/>
            },
        ]
      },
      {
        path:'*',
        element:(<h1>not found page 404</h1>)
      }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
