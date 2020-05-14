import React from 'react';
import HasTitle from './components/1_title';
import HasRequests from './components/3_request';
import HasMousePosition from './components/2_mouse_position';
import HasInputs from './components/4_input'

function App() {
  return (
    <div className="App">
     {/* <HasTitle /> */}
     {/* <HasMousePosition /> */}
     {/* <HasRequests /> */}
     <HasInputs />
    </div>
  );
}

export default App;
