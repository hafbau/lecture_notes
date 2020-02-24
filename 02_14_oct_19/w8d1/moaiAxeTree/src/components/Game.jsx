import React, { useState } from "react";
import Computer from './Computer'
import Player from './Player'
import Result from './Result'

export default function Game() {
  const [state, setState] = useState({
    compSelection: null,
    playerSelection: null,
    status: 'Waiting',
    cheating: true
  });
  
  return (
    <div>
      <main className="game">
        <Computer state={state} setState={setState}/>
        <Player state={state} setState={setState}/>
      </main>
      <Result status={state.status} />
    </div>
  );
}
