import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Dropdown from './components/Dropdown';
import Fetch from './components/Fetch';
import Login from './components/Login';
import Pesel from './components/Pesel';
import Webwork from './components/Webwork';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="dropdown" element={<Dropdown />} />
          <Route path="fetch" element={<Fetch />} />
          <Route path="login" element={<Login />} />
          <Route path="pesel" element={<Pesel />} />
          <Route path="webwork" element={<Webwork />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
