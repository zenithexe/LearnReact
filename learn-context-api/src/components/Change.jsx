import React, { useContext, useState } from 'react'
import UserContext from '../contexts/UserContext'

export const Change = () => {
    const {setUser} = useContext(UserContext);
    const [asset,setAsset] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        setUser(asset);
        console.log("Submit")
    }

  return (
    <>
        <input type="text"
        onChange={(e)=>setUser(e.target.value)}></input>
        <button onClick={handleSubmit}>Change</button>

    </>
  )
}
