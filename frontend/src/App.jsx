import { Routes, Route } from "react-router-dom"
import "./App.css"
import Header from './components/header/Header'
import Home from "./components/home/Home"
import Dashboard from "./components/dashboard/Dashboard"
import Methods from "./components/methods/Methods"
import VerticalHeader from "./components/verticalHeader/VerticalHeader"
import Login from "./components/login/Login"
import AppContext from "./context/AppContext"
import { useState } from "react"
import GrievanceData from "./components/grievanceData/GrievanceData"

function App() {
  const [checking, setChecking] = useState(true)
  const [toggleMenu, setToggleMenu] = useState(true)

  const checkLogin = () => {
    setChecking(false)
  }

  const toggleMenuHandle = () => {
    setToggleMenu(!toggleMenu);
  }

  return (
    <>

      {
        checking ?
          <AppContext>
            <Login checkLogin={checkLogin} checking={checking} />
          </AppContext>
          :
          <>
            <AppContext>
              <Header toggleMenuHandle={toggleMenuHandle} toggleMenu={toggleMenu} />
              <VerticalHeader />

              <div className={toggleMenu ? `appRight` : "appLeft"}>
                <Routes>
                  <Route path="/" element={<Home toggleMenu={toggleMenu} />} />
                  <Route path="/methods" element={<Methods />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/grievance" element={<GrievanceData />} />
                </Routes>
              </div>
            </AppContext>
          </>
      }

    </>
  )
}

export default App
