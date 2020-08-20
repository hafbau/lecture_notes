import { useEffect, useState } from 'react'
import axios from 'axios';

axios.defaults.headers['x-api-key'] = 'DEMO-API-KEY';

const useRequests = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setErr] = useState('');

  useEffect(() => {
    setLoading(true)
    axios.get(url)
    .then((response) => {
      console.log('response :>> ', response);
      setLoading(false)
      setData(response.data)
    })
    .catch(errOR => {
      console.log('errOR :>> ', errOR);
      setErr('Bad things happen to the data')
    })
  }, [])
  return { loading, error, data }
}

export default useRequests;