import { Routes, Route } from "react-router-dom"
import "./App.css"
import Header from './components/header/Header'
import About from "./components/about/About"
import Dashboard from "./components/dashboard/Dashboard"
import Methods from "./components/methods/Methods"
import VerticalHeader from "./components/verticalHeader/VerticalHeader"
import Login from "./components/login/Login"

function App() {

  return (
    <>
      {
        false ? <Login />
          :
          <>
            <Header />
            <VerticalHeader />

            <div className="appRight">
              <Routes>
                <Route path="/" element={<About />} />
                <Route path="/methods" element={<Methods />} />
                <Route path="/dashboard" element={<Dashboard />} />
              </Routes>
            </div>

          </>
      }


    </>
  )
}

export default App
