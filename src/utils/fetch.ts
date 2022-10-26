import {useEffect, useState} from 'react';
import axios from 'axios';
import {Simpson} from '../Types/types';

function useFetch(url: string) {
  const [fetchData, setFetchData] = useState<Simpson[]>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then(response => {
        setFetchData(response.data);
      })
      .catch(error => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return {fetchData, loading, error};
}
export default useFetch;
