

import Header from './components/Header'


import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './pages/Home';
import Locations from './pages/Locations';


import './App.css'

function App() {

  return (
    <>
      <div>
        <Header></Header>
      </div>
      
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/locations" element={<Locations/>}/>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
