import { useEffect, useMemo, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { DeleteGame, GAMES } from '../../utils/crud.mjs'
import { rootRefs } from '../../utils/local.mjs'
import GridSpinner from '../spinner/GridSpinner.jsx'
import './ManageGames.css'
export default function ManageGames() {
    //   const location=useLocation()
    //   const games=location.state
    const [games, setGames] = useState(GAMES)
    const [isDeleting,setIsDeleting]=useState(false)
    const deleteMe = async (id) => {
        const res = confirm("do you want to complete");

        if (!res)
            return

        setIsDeleting(true)
        await DeleteGame(id)
        const gms = await rootRefs.reCallData()
        setIsDeleting(false)
        setGames(gms)
    }

   
    return (
        <div className="manage-games">
            {
                isDeleting&&<GridSpinner/>
            }
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
                        games && games.map((g, i) => {
                            return <tr key={i}>
                                <td>{g.title}</td>
                                <td>{g.type}</td>
                                <td>{g.price}</td>
                                <td>{g.year}</td>
                                <td><img width={100} src={g.backGround} /></td>
                                <td>
                                    <Link state={g} to={'/admin-dashboard/edit'}>Edit</Link>
                                    <button onClick={() => deleteMe(g.id)}>Delete</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
