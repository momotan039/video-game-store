import { useRef, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { putGame } from "../../../utils/crud.mjs"
import { rootRefs } from "../../../utils/local.mjs"
import GridSpinner from "../../spinner/GridSpinner.jsx"
import './panelGame.css'
export default function EditGame() {
  const game = useLocation().state
  const [formData,setFormData]=useState(game)
  const changeData=(e)=>{
    const{name,value}=e.target
    setFormData({...formData,[name]:value})
  }
  const [isEditing,setIsEditing]=useState(false)
  const editGame=async()=>{
    const res = confirm("do you want to complete");
    if (!res)
        return
    setIsEditing(true)
    await putGame(formData)
    setIsEditing(false)
    rootRefs.reCallData()
  }
  return (
   <>
   {
    isEditing&&<GridSpinner/>
   }
    <div className="control-panel-game center">
      <div className="image" style={{ backgroundImage: `url(${formData.backGround})` }}></div>
      <div className="detials">
        <div className="row">
          <h3>Title:</h3>
          <input name="title"  type="text" onChange={changeData}  value={formData.title} placeholder='Enter here the title' />
        </div>
        <div className="row">
          <h3>Type:</h3>
          <input name="type"  type="text" onChange={changeData} value={formData.type} placeholder='Enter here the type' />
        </div>
        <div className="row">
          <h3>Price:</h3>
          <input name="price"  type="text" onChange={changeData} value={formData.price} placeholder='Enter here the price' />
        </div>
        <div className="row">
        <h3>Year:</h3>
        <input name="year"  type="text" onChange={changeData} value={formData.year} placeholder='Enter here the year'/>
        </div>
        <div className="row">
        <h3>Image:</h3>
        <input name="backGround" type="text"   onChange={changeData} value={formData.backGround} placeholder='Enter here the image'/>
        </div>
        <div className="contorls">
          <Link to='/admin-dashboard/manage-games'><button>Close</button></Link>
          <button onClick={editGame}>Edit</button>
        </div>
      </div>
    </div>
   </>
  )
}
