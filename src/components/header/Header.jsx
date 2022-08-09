/*
Componente que preenche as informações do cabeçalho: foto do perfil, login do usuário, nome e link
*/

// Style
import Search from '../search/Search';
import './Header.css';

// Image


const Header = ({ avatar, user, userName, github, getUserData}) => {

  return (
    <div className='header'>
        <div className="master-container">
          <img src={avatar ? avatar : './user.png' } alt="avatar-img" />
      
          <ul>
              <li>User: {user}</li>
              <li>Name: {userName}</li>
              <li>GitHub: <a href={github} target="_blank">{github}</a></li>
        </ul>
      </div>
      <Search getUserData={getUserData}/>
    </div>

  );
};

export default Header;