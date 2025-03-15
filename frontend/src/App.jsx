import React from "react";
import NavBar from "./Navbar";
import Home from "./pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import "./NavBar.css";
import {Routes,Route} from 'react-router-dom'
 import Login from "./components/Login"; 
import Contact from "./components/Contact";
import Signup from "./components/Signup";
 import Explore from "./components/Explore"; 
import ProfilePage from "./components/ProfilePage";
import CreatePage from "./components/CreatePage";
import Streak from "./components/Streak";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
       <Route path="/login" element={<Login/>}></Route> 
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/explore' element={<Explore/>}></Route> 
        <Route path='/profile' element={<ProfilePage/>}></Route>
        <Route path="/create" element={<CreatePage/>}></Route>
        <Route path="/profile/streak" element={<Streak/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
