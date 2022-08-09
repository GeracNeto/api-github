// Style
import './App.css';
import './styles/global.css';

// Axios
// Axios é um cliente HTTP baseado em Promises para fazer requisições.
import axios from 'axios';

// React
import { useEffect, useState } from 'react'

// Components
import Header from './components/header/Header';
import Search from './components/search/Search';
import Repository from './components/repository/Repository';
import Footer from './components/footer/Footer';

function App() {

  const [information, setInformation] = useState({}); // Variável que armazena as informações do usuário por meio do get na API.
  const [repository, setRepository] = useState([]); // Variável que armazena os repositórios do usuário pesquisado

  const getUserData = (user) => {
    /*
    Essa função usa o método get para fazer a requisição
    dos dados dos usuários no github. Recebe o nome do usuário 
    pelo componente Search e busca os dados armazenando-os na varoável "information"
    */    
    axios.get(`https://api.github.com/users/${user}`, {
      headers: {Authorization: ''}
    }).then(response => {
      setInformation(response.data);
      console.log(response.data);
    }).catch(error => console.log('Erro:', error))
  }


  useEffect(() => {
    /*
    Semmpre que a variável information for atualizada
    é feito get na api do github para retornar os repositórios do usuário pesquisado.
    Os repositórios são armazenados na variável "repository"
    */
   
    axios.get(`https://api.github.com/users/${information.login}/repos`,{
      headers: {Authorization: ''}
    }).then(response => {
      setRepository(response.data);
      console.log(response.data);
    }).catch(error => console.log('Erro repositorio:', error));
  }, [information]);
  

  return (
    <div className="App">
      <Header avatar={information.avatar_url} user={information.login} userName={information.name} github={information.html_url} getUserData={getUserData}/>

      <div className="repos">
        {repository.map(repo => (
          <Repository key={repo.id} repoName={repo.name} repoLink={repo.html_url} repoLanguages={repo.languages_url} repoObs={repo.description}/>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default App;
