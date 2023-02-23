import { useEffect, useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { GAMES } from '../../utils/crud.mjs'
import './ManageGames.css'
export default function ManageGames() {
//   const location=useLocation()
//   const games=location.state
const games=GAMES
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
                    games&&games.map((g,i)=>{
                      return  <tr key={i}>
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
