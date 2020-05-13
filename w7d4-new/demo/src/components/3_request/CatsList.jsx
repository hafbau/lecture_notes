import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Masonry from '../0_helpers/Masonry';
import CatCard from '../0_helpers/CatCard';

axios.defaults.headers['x-api-key'] = 'DEMO-API-KEY';

function Cats() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true)
    axios.get('https://api.thecatapi.com/v1/images/search?limit=80&mime_types=&order=Random&size=small&page=1&sub_id=demo-63a491')
    .then(({ data }) => {
      setLoading(false)
      setCats(data)
    })
  }, [])

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>What does the cat say?</h1>
      <p>That, is the question!</p>
      {loading ? (
        <h4>Loading cats ... ...</h4>
      ) : (
        <Masonry>
          {cats.map(cat => <CatCard key={cat.id} img={cat.url} />)}
        </Masonry>
      )}
    </div>
  )
}

export default Cats;