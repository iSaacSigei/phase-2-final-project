import React from "react";
import { Redirect } from "react-router-dom";


function Notes({isLoggedIn}) {
  if (!isLoggedIn) return <Redirect to="/login" />;
  return(
    <div className="notes"x>
        <form >
          <label>Title</label>
          <input type="text" placeholder="Note Title" />
          <label>category</label>
          <input type="text" placeholder="Note Category"/>
          <label>Note</label>
          <textarea name="notes" required placeholder="write your note here" maxLength="200"></textarea>
        </form>
    </div>
  )
}

export default Notes;
