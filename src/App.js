import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import { Button } from 'antd';
import Layout from './layout'
import ProgressBar from './components/progressBar'
// import myEventEmitter from './util/index.js'
// window.myEvent = new myEventEmitter()
function App() {
  return (
    <div>
      <ProgressBar color={'red'}></ProgressBar>
      <Layout></Layout>
    </div>
  );
}

export default App;
