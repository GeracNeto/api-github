// React
import { useState } from 'react'

const Search = ({ getUserData }) => {
    
    const [user, setUser] = useState(); // Variável que armazena o nome do usuário

    return (
        <>
            <input type="text" onChange={e => setUser(e.target.value)}/>
            <button onClick={() => getUserData(user)}>Clique aqui</button>
        </>
  );
};

export default Search;