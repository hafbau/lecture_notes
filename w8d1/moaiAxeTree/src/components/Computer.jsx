import React from 'react';

export default function Computer(props) {
  const { state: { compSelection, cheating } } = props;

  return (
    <section className="computer">
      <span
        data-testid="robot-icon"
        role="img"
        aria-label="robot"
        className="cheating"
      >
        🤖
      </span>
      <div>
        <h1>{cheating ? "EXTERMINATE !" : "Good game to you"}</h1>
        <div className="choices">
          <button>
            <span role="img" aria-label="moai">
              {compSelection === "Moai" ? "🗿" : " ? "}
            </span>
          </button>
          <button>
            <span role="img" aria-label="axe">
              {compSelection === "Axe" ? "🔨" : " ? "}
            </span>
          </button>
          <button>
            <span role="img" aria-label="tree">
              {compSelection === "Tree" ? "🌳" : " ? "}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
