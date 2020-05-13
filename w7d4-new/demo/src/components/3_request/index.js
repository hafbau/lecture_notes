import React, { useState } from 'react'
import { Button } from '@material-ui/core';
import Cats from './CatsList';
import Dogs from './DogsList';

export default function HasRequests() {
  const [showDogs, setShowDogs] = useState(true)
  return (
    <div>
      {showDogs ? [
        <Button disabled>Showing Dogs</Button>,
        <Button onClick={() => setShowDogs(false)}>Show Cats</Button>,
        <hr />,
        <Dogs />
      ] : [
        <Button onClick={() => setShowDogs(true)}>Show Dogs</Button>,
        <Button disabled>Showing Cats</Button>,
        <hr />,
        <Cats />
      ]}
    </div>
  )
}
