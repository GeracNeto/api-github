/*
Componente que preenche as informações do cabeçalho: foto do perfil, login do usuário, nome e link
*/

// Style
import './Header.css';

const Header = ({ avatar, user, userName, github }) => {
  return (
    <div className="master-container">
      <img src={avatar} alt="avatar-img" />
  
      <ul>
          <li>User: {user}</li>
          <li>Name: {userName}</li>
          <li>GitHub: <a href={github} target="_blank">{github}</a></li>
      </ul>
      
   
    </div>
  );
};

export default Header;