import React from 'react';
import useTitle from '../../hooks/useTitle';

export default function DodgyDog() {
  useTitle('The App - this is cool dog');

  return (
    <div style={{ margin: '0 auto', width: 550 }}>
      <h2>Wazzaaa, I'm the dodgy dog, snoooop</h2>
      <img
        style={{ width: 539 }}
        alt="dodgy dog"
        src="https://i.redd.it/yfnw4c86chmz.jpg" />

      <hr />

      <h3><em>Stop judging, its legal</em></h3>

      <img
        style={{ width: 400 }}
        alt="dodgy dog"
        src="https://img.theepochtimes.com/assets/uploads/2014/05/alex_co.jpg" />

    </div>
  )
}