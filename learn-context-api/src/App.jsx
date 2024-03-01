import { useContext } from 'react'
import './App.css'
import UserContextProvider from './contexts/UserContextProvider'

function App() {
  return (
    <>
      <UserContextProvider>
        <div>Hello</div>
      </UserContextProvider>
    </>
  )
}

export default App
