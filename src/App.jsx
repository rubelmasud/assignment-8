import { useState } from 'react'
import Nav from './components/header/Nav'
import Main from './components/main-section/Main'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Quertion from './components/quertion/Quertion';

function App() {

  return (
    <div className="App">
      <Nav />
      <Main />
      <ToastContainer></ToastContainer>
      <Quertion></Quertion>
    </div>
  )
}

export default App
