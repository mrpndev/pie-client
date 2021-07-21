import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Navbar from './components/Navbar/Navbar';
import StatePractice from './components/StatePractice';
import PropPractice from './components/PropPractice';
import Auth from './components/Auth/Auth';
import Pies from './components/Pies';

function App() {

  const [sessionToken, setSessionToken] = useState(undefined)
  console.log(sessionToken)

  let myName = "Paul"

  return (
    <div className="App">
      <Navbar />
      <Auth />
      <Pies />
    </div>
  );
}

export default App;
