
import React from 'react'
import "./App.css";
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRooms from './pages/SingleRooms'
import Error from './pages/Error'
import { Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <Navbar/>
      <Switch>
         <Route exact path="/" component={Home}/>
         <Route  exact path="/rooms/" component={Rooms}/>
         <Route exact path="/rooms/:slug" component={SingleRooms}/>
         <Route component={Error}/>
      </Switch>
    </>
  ) 
}

export default App
