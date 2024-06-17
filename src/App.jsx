

import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Nav from './components/Nav';

import Home from './components/Home';
import Articles from './components/Articles';
import Users from './components/Users';

import './App.css';

function App() {

  return (
    <div className='App'>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Articles" element={<Articles />} />
        <Route path="/Users" element={<Users />} />
      </Routes>
    </div>
  )
}

export default App
