import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar/Navbar';
import StatePractice from './components/StatePractice';
import PropPractice from './components/PropPractice';
import Auth from './components/Auth/Auth';
import Pies from './components/Pies';

function App() {

  const [sessionToken, setSessionToken] = useState(undefined)

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"))
    }
  })

  const updateLocalStorage = newToken => {
    localStorage.setItem("token", newToken)
    setSessionToken(newToken)
    console.log(newToken)
  }

  const viewConductor = () => {
    return sessionToken !== undefined ?
    <Pies sessionToken={sessionToken}/>
    : <Auth updateLocalStorage={updateLocalStorage} />
  }

  const clearLocalStorage = () => {
    localStorage.clear()
    setSessionToken(undefined)
  }

  return (
    <div className="App">
      <Navbar clearSession={clearLocalStorage}/>
      {viewConductor()}
    </div>
  );
}

export default App;
