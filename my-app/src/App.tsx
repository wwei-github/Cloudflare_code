import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
const axios = require('axios');

type axiosResponse = {
  data: {
    data: {
      name: string
    }
  }
}

function App() {
  const [text, setText] = useState('')
  useEffect(() => {
    axios.get('https://my-typescript-worker.wwei97.workers.dev/')
      .then(function (response: axiosResponse) {
        setText(response.data.data.name)
      })
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {text}
      </header>
    </div>
  );
}

export default App;
