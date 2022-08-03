// Style
import './App.css';

// Axios
import axios from 'axios';

// React
import { useEffect, useState } from 'react'

// Components
import Header from './components/header/Header';

function App() {

  const [information, setInformation] = useState({});
  const [user, setUser] = useState();

  const getUserData = (user) => {
    
    axios.get(`https://api.github.com/users/${user}`).then(response => {
      setInformation(response.data);
      console.log(response.data);
    }).catch(error => console.log('Erro:', error))
  }


  return (
    <div className="App">
      <input type="text" onChange={e => setUser(e.target.value)}/>
      {console.log(user)}

      <button onClick={() => getUserData(user)}>Clique aqui</button>
      <p>User Name: {information.login === user ? information.name : 'error'}</p>

    </div>
  )
}

export default App
