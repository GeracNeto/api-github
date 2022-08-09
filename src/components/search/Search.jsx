// React
import { useState } from 'react';

// Style
import './Search.css';

const Search = ({ getUserData }) => {
    
    const [user, setUser] = useState(); // Variável que armazena o nome do usuário

    return (
        <form className="search">
            <input type="text" onChange={e => setUser(e.target.value)} placeholder="User Name" />
            <img src="./pesquisar-usuario.png" alt="" onClick={() => getUserData(user)}/>
        </form>
  );
};

export default Search;