import React from 'react';
import './App.css';
// import Routing from './components/routing/Routing';
// import Styled from './components/styled/Styled';
// import UseContext from './components/use-context/UseContext';
import UseRef from './components/use-ref/UseRef';
// import MySkeleton from './components/material-skeleton/MySkeleton'

import useRequest from './hooks/useRequest';

function App() {
  // const avatarUrl = 'https://i1.wp.com/bestlifeonline.com/wp-content/uploads/2019/07/what-is-quokka.jpg?fit=1200%2C800&ssl=1'

  // const { loading, data } = useRequest()

  // console.log('data', data)
  return (
    <div className="App" >
      {/* <Routing /> */}
      {/* <Styled /> */}
      {/* <MySkeleton loading={loading} avatarUrl={avatarUrl} title="Our custom title" imageUrl={avatarUrl} /> */}
      {/* <UseContext /> */}
      <UseRef />
    </div>
  );
}

export default App;