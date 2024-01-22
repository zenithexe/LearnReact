import { useContext } from 'react'
import './App.css'
import UserContextProvider from './contexts/UserContextProvider'
import UserContext from './contexts/UserContext'
import { Change } from './components/Change'
import Display from './components/Display'

function App() {
  
  

  return (
    <>
      <UserContextProvider>
        <div>Hello</div>
        <Change/>
        <Display/>
      </UserContextProvider>
    </>
  )
}

export default App
