import React from "react";
import { NavLink, useHistory } from "react-router-dom";

function NavBar({ setIsLoggedIn }) {
  const history = useHistory();
  function handleLogout() {
    setIsLoggedIn(false);
    history.push("/login");
  }

  const linkStyles = {
    width: "150px",
    height:"30px",
    paddingTop: "10px",
    borderRadius:"8px",
    padding:"2px",
    alignItems:"center",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };

  return (
    <div className="navbar">
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        About
      </NavLink>
      <NavLink
        to="/login"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Login
      </NavLink>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default NavBar;
