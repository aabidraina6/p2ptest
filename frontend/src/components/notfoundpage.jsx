import React from 'react';
import axios from 'axios'

export const NotFound = () => {
    
    //  localStorage.removeItem("access-token");
      // window.location.reload();

      const detailsobj = {
        convid: "640d698acbb09e485610e826",
    }

      axios
      .post("http://localhost:4000/mess/getmess", detailsobj)
      .then(res => {
        console.log("success!!");
        console.log(res.data)
      })
      .catch(err => {
          console.log(" ----------> here we got an error");
      });

    return (<div className="App">
        <b>
          <center>
            <h1 style={{marginTop: "50%"}}>404 Not found</h1>
          </center>
        </b>{" "}
      </div>);
}