import React from 'react';
import Greeting from './greeting';

function App(props) {
  return (
    <div>
      <Greeting name="hage" />
      <Greeting name="bob" />
    </div>
  );
}

export default App;
