import { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './ManageGames.css'
export default function ManageGames() {
  const location=useLocation()
  const games=location.state
  return (
    <div className="manage-games">
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Type</th>
                    <th>Price</th>
                    <th>Creation Year</th>
                    <th>image</th>
                    <th>Operation</th>
                </tr>
            </thead>
            <tbody>
                {
                    games.map(g=>{
                      return  <tr>
                            <td>{g.title}</td>
                            <td>{g.type}</td>
                            <td>{g.price}</td>
                            <td>{g.year}</td>
                            {/* backGround */}
                            <td><img width={100} src={g.backGround}/></td>
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
