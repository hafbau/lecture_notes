import React, { useState } from 'react'
import { Button } from '@material-ui/core';
import CuriousCat from './CuriousCat';
import DodgyDog from './DodgyDog';

export default function HasTitle() {
  const [isCatPage, setPage] = useState(true)
  return (
    <div>
      <Button
        color='secondary'
        onClick={() => setPage(isCat => !isCat)}
      >
        Switch Page
      </Button>

      {isCatPage ? (
        <CuriousCat />
      ) : (
        <DodgyDog />
      )}
    </div>
  )
}
