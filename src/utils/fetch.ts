import {useEffect, useState} from 'react';
import axios from 'axios';
import {addNewCharacter} from '../redux/CharacterReducer';
import {useDispatch} from 'react-redux';

function useFetch(url: string) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then(response => {
        dispatch(addNewCharacter(response.data));
      })
      .catch(error => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return {loading, error};
}
export default useFetch;
