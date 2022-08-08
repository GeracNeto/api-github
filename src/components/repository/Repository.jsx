// Axios
import axios from "axios";

// React
import { useEffect, useState } from "react";

// Styles
import './Repository.css';

const Repository = ({ repoName, repoLink, repoLanguages, repoObs, key }) => {

    const [languages, setLanguages] = useState({});

    let testes = Object.keys(languages);
    console.log(Object.keys(languages));
    
    useEffect(() => {

        axios.get(repoLanguages, {
            headers: {Authorization: ''}
          }).then(response => {
            setLanguages(response.data);
            console.log(response.data);
        }).catch(error => console.log('Error get language: ', error));
    }, []);

    return (
        <div className="repository">
            <h2><a href={repoLink} target="_blank">{repoName}</a></h2>
            <p>{repoObs}</p>
            <ul>
                {testes.map(teste => <li key={key}>{teste}</li>)}
            </ul>
        </div>
      );
};

export default Repository;
