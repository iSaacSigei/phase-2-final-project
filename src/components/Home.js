import React from "react";
import { Redirect } from "react-router-dom";

function Home({ isLoggedIn, notes }) {
  console.log(notes);
  const noteCard = notes.map((note) => (
    <>
      <div className="imgContainer">
        <img src={note.url} alt="Oops" />
        <h3>{note.title}</h3>
        <p>{note.message}</p>
        <h5>@{note.author}</h5>
      </div>
    </>
  ));
  if (!isLoggedIn) return <Redirect to="/login" />;

  return <div className="imageCard">{noteCard}</div>;
}

export default Home;
