import React from 'react';
import Header from './components/Header';
import Game from './components/Game';
import './App.scss';
// import Axios from 'axios'

// const readQr(img)
function App() {
  const [img, setImg] = React.useState("")

  const handleUpload = (e) => {
    const input = e.target;
  
    if (input.files && input.files[0]) {
      const reader = new FileReader();

      reader.onloadend = (e) => {
        console.log('Got Here', e.target)
        console.log('Got Here Resut', e.target.result)
        setImg(e.target.result)
      }

      reader.readAsDataURL(input.files[0]);
    }
  }
  return (
    <div className="App">
      <Header />
      <input type="file" accept="image/*" capture="camera" onChange={handleUpload}/>
      <img src={img} />
      <Game />
    </div>
  );
}

export default App;
