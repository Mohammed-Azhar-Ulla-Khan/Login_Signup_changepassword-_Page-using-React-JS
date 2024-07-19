import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Password from './Components/Password';
import Passmain from './Components/Passmain';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/password" element={<Passmain/>}></Route>

    </Routes>
    </BrowserRouter>
  </div>
);
}

export default App;
