import {useState,useEffect} from 'react';

const useFetch = (url) => {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{
        setLoading(true);
        setResponse(null);
        setError(null);

        fetch(url)
        .then(response => response.json())
        .then(response => {
            setLoading(false);
            setResponse(response);
        })
        .catch(error => {
            setLoading(false);
            setError(error);
        })
    },[url]);
    console.log(error, response)
    return [response, loading, error];
};

export default useFetch;