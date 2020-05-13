import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ImageGridList from '../0_helpers/ImageGridList';

axios.defaults.headers['x-api-key'] = 'DEMO-API-KEY';
function Dogs() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true)
    axios.get('https://api.thedogapi.com/v1/images/search?limit=80&mime_types=&order=Random&size=small&page=1&sub_id=demo-507df3')
    .then(({ data }) => {
      setLoading(false)
      setDogs(data)
    })
  }, [])
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Who let the Dawgs out</h1>
      <p>No, not a question!</p>
      {loading ? (
        <h4>Loading dogs ... ...</h4>
      ) : (
        <ImageGridList images={dogs} />
      )}
    </div>
  )
}

export default Dogs;