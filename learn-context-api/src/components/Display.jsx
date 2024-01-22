import React from 'react'
import UserContext from '../contexts/UserContext'
import { useContext } from 'react'


function Display() {
    const {user} = useContext(UserContext)
  return (
    <div>{user}</div>
  )
}

export default Display