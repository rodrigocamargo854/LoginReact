import React, {useState} from "react";
import "./App.scss";
import { Login, Register } from "./components/login/index";

const App = () => {
  const [mode, setMode] = useState('login')

  const toggleState = () => {
    setMode(mode === 'login' ? 'register' : 'login')
  }

  return (
    <div className="App">
      <div className="login">
        <div className="container">
          {mode === 'login' ? <Register /> : <Login />}
        </div>
        <Aside mode={mode} onClick={toggleState} />
      </div>
    </div>
  )
}

const Aside = ({ mode, onClick }) => (
  <div onClick={onClick} className={`right-side ${mode === 'login' ? 'right' : 'left'}`}>
    <div className="inner-container">
      <div className="text">{mode === 'login' ? 'Login' : 'Register'}</div>
    </div>
  </div>
)

export default App
