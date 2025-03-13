import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from "./Signup"
import Login from "./Login";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Headers from "./Headers"
import Home from "./Home"
import Footer from "./Footer";
import Check from "./Check"
import Functionalities from "./Functionalities";
function App() {
  return (
    <Router>
            <div>  
            <Headers />   
                <Routes>
                <Route path="/Home" element={<Home />}/>
                <Route path="/Signup" element={<Signup />}> </Route>
                <Route path="/Login" element={<Login />}></Route>
                <Route path="/Check" element={<Check />}/>
                <Route path="/Functions" element={<Functionalities />}/>
                </Routes>
            </div>
            <Footer />
    </Router>

  )
}

export default App
