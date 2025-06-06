import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Feed from './Feed'


function App() {
  return (
    <>
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
        </div>


      </div>
    </>
  )
}

export default App
