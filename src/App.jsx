
import './App.css'
import MainPage from './Pages/Mainpage/MainPage'
import Profile from './Pages/Profile/Profile'
import { Routes, Route } from "react-router-dom"
import Data  from "../../data";

function App() {


  return (
    <>
    <Routes>
    <Route path="/" element={ <MainPage/> } />
    <Route path="/profile/:id" element={ <Profile data={Data}/>} />
    </Routes>
    
      
     

    </>
  )
}

export default App
