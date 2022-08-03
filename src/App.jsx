// Style
import './App.css';

// Axios
// Axios é um cliente HTTP baseado em Promises para fazer requisições.
import axios from 'axios';

// React
import { useEffect, useState } from 'react'

// Components
import Header from './components/header/Header';
import Search from './components/search/Search';

function App() {

  const [information, setInformation] = useState({}); // Variável que armazena as informações do usuário por meio do get na API.

  const getUserData = (user) => {
    /*
    Essa função usa o método get para fazer a requisição
    dos dados dos usuários no github. Recebe o nome do usuário 
    pelo componente Search e busca os dados armazenando-os na varoável "information"
    */    
    axios.get(`https://api.github.com/users/${user}`).then(response => {
      setInformation(response.data);
      console.log(response.data);
    }).catch(error => console.log('Erro:', error))
  }


  return (
    <div className="App">
      <Header avatar={information.avatar_url} user={information.login} userName={information.name} github={information.html_url}/>
      
      <Search getUserData={getUserData}/>

    </div>
  )
}

export default App
