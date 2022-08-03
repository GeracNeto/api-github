// Style
import './Header.css';


const Header = ({ avatar, user, userName, github }) => {
  return (
    <div className="master-container">
      <img src={avatar} alt="avatar-img" />
  
      <ul>
          <li>User: {user}</li>
          <li>Name: {userName}</li>
          <li>GitHub: {github}</li>
      </ul>
      
   
    </div>
  );
};

export default Header;