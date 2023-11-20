import { Routes, Route } from "react-router-dom"
import "./App.css"
import Header from './components/header/Header'
import About from "./components/home/Home"
import Dashboard from "./components/dashboard/Dashboard"
import Methods from "./components/methods/Methods"
import VerticalHeader from "./components/verticalHeader/VerticalHeader"
import Login from "./components/login/Login"
import AppContext from "./context/AppContext"
import { useState } from "react"

function App() {
  const [checking, setChecking] = useState(true)

  const checkLogin = () => {
    setChecking(false)
  }

  return (
    <>
      {
        checking ?
          <AppContext>
            <Login checkLogin={checkLogin} />
          </AppContext>
          :
          <>
            <AppContext>
              <Header />
              <VerticalHeader />

              <div className="appRight">
                <Routes>
                  <Route path="/" element={<About />} />
                  <Route path="/methods" element={<Methods />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
              </div>
            </AppContext>
          </>
      }
    </>
  )
}

export default App
