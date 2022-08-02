import axios from 'axios';
import { useEffect, useState } from 'react'

function App() {

  const user = 'GeracNeto'

  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    axios.get(`https://api.github.com/users/${user}/repos`).then(response => {
      setRepositories(response.data);
    });
  }, []);

  return (
    <div className="App">
      <ul>
        {repositories.map(repo => (
          <li>{repo.full_name}</li>
        ))}
      </ul>
 
    </div>
  )
}

export default App
