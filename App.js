import './App.css';
import axios from 'axios';
import User from './components/User';
import React, { useState, useEffect }  from 'react';

function App() {
  const [user, setUser] = useState(null)
  
  const url = "https://swapi.dev/api/people/";

  useEffect(() =>{
    getUser();
  }, [url]);

  const getUser =() => {
    axios
        .get(url)
        .then((response) =>{
          const allUser = response.data.results;
          setUser(allUser);
        })
        .catch((error) => console.error(`Error: ${error}`))

  }

  if(user) {

    return (
      <div className="App">
      <User user={user} />
      </div>
    );
  }
    return(
      <div>

      </div>
    )

}

export default App;

console.log ("this is not a replicated site🙃")