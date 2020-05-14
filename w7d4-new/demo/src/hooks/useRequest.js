import {
  useEffect,
  useState
} from 'react';
import axios from 'axios';

axios.defaults.headers['x-api-key'] = 'DEMO-API-KEY';

const useRequest = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true)
    axios.get(url)
    .then(({ data: dataFromRes }) => {
      setLoading(false)
      setData(dataFromRes)
    })
    .catch(err => {
      setLoading(false)
      setError('Bad things happened - cannot get data.')
    })
  }, [url]);

  return { data, loading, error };
}

export default useRequest;
