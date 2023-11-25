import { useEffect } from 'react';
import './App.css';
import { Route,Routes, BrowserRouter } from 'react-router-dom';

import Home from './pages/home/home';
import MyAccount from './pages/Accounts/MyAccount';
function App() {
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/">
      <Route index element={<Home />} />
      <Route path="/accounts" element={<MyAccount />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
