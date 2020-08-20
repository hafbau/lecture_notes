import React from 'react'
import useRequests from '../../hooks/useRequests'
import Masonry from '../0_helpers/Masonry';
import CatCard from '../0_helpers/CatCard';

function Cats() {
  const { loading, error, data: cats } = useRequests('https://api.thecatapi.com/v1/images/search?limit=80&mime_types=&order=Random&size=small&page=1&sub_id=demo-63a491')

  if(error) {
    return <h3>Oh snap! {error}</h3>
  }

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