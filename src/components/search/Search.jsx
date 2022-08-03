// React
import { useState } from 'react';

// Style
import './Search.css';

const Search = ({ getUserData }) => {
    
    const [user, setUser] = useState(); // Variável que armazena o nome do usuário

    return (
        <div className="search">
            <input type="text" onChange={e => setUser(e.target.value)}/>
            <button onClick={() => getUserData(user)}>Search</button>
        </div>
  );
};

export default Search;