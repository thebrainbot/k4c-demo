import { useState, useEffect } from 'react';

const useFetchData = (endpoint) => {
  const [status, setStatus] = useState('idle');
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      setStatus('requesting');
      fetch(endpoint)
        .then(res => res.json())
        .then(
          (result) => {
            setStatus('loaded');
            setData(result);
          },
          (error) => {
            setStatus('loaded');
            setError(error);
          }
        )
    };

    getPosts();
  }, [endpoint]);

  return {status, data, error};
}

export default useFetchData;