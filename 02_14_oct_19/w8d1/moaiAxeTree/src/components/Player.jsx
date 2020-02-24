import React from 'react';

export default function Player(props) {
  const {setState} = props


  const registerPlayerItem = (value, updater) => {
    return updater(prevState => ({ ...prevState, playerSelection: value }));
  }

  return (
    <section className="player">
      <span role="img" aria-label="player">
        👤
      </span>
      <div>
        <h1>Choose your destiny !</h1>
        <div className="choices">
          <button
            onClick={() => registerPlayerItem("Moai", setState)}
            type="button"
            value="Moai"
          >
            <span role="img" aria-label="moai">
              🗿
            </span>
          </button>

          <button
            onClick={() => registerPlayerItem("Axe", setState)}
            type="button"
            value="Axe"
          >
            <span role="img" aria-label="axe">
              🔨
            </span>
          </button>

          <button
            onClick={() => registerPlayerItem("Tree", setState)}
            type="button"
            value="Tree"
          >
            <span role="img" aria-label="tree">
              🌳
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
