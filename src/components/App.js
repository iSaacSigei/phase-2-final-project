import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import Notes from "./Notes";
import Home from "./Home";

function App() {

const[notes, setNotes]=useState([])
useEffect(()=>{
  fetch('http://localhost:3000/notes')
  .then(res=>res.json())
  .then((data)=>{
    console.log(data)
    setNotes(data)
    
  })
},[])
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <NavBar setIsLoggedIn={setIsLoggedIn} />
      <hr/>
      <Switch>
        <Route exact path="/notes">
          <Notes isLoggedIn={isLoggedIn}/>
        </Route>
        <Route exact path="/login">
          <Login setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Route exact path="/">
          <Home isLoggedIn={isLoggedIn} notes={notes}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
