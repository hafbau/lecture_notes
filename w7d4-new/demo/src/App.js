import React from 'react';
import HasTitle from './components/1_title';
import HasRequests from './components/3_request';
import HasMousePosition from './components/2_mouse_position';

function App() {
  return (
    <div className="App">
     {/* <HasTitle /> */}
     <HasMousePosition />
     {/* <HasRequests /> */}
    </div>
  );
}

export default App;
