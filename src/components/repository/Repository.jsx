// Axios
import axios from "axios";

// React
import { useEffect, useState } from "react";

const Repository = ({ repoName, repoLink, repoLanguages }) => {

        const [languages, setLanguages] = useState({});


    useEffect(() => {

        axios.get(repoLanguages).then(response => {
            setLanguages(response.data);
            console.log(response.data);
        }).catch(error => console.log('Error get language: ', error));
    }, []);

    return (
        <div>
            <p><a href={repoLink} target="_blank">{repoName}</a></p>
            {console.log(Object.keys(languages))}

        </div>
      );
};

export default Repository;