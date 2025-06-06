import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Widgets from './Widgets'
import Login from './Login'
import { useStateValue } from './StateProvider'

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <>
     {
      !user?
          <Login /> 
      :
      <div className="app">
        {/** Header Component */}
        <Header />
        {/** App Body */}
        <div className="app__body">
          {/** Sidebar */}
          <Sidebar />
          {/** Feed */}
          <Feed />
          {/** Widgets */}
          <Widgets />
        </div>


      </div>
     }
    </>
  )
}

export default App
