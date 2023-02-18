import React from 'react';
import { Route, Routes } from "react-router-dom";
import Cards from "./routes/Cards";
import Create from "./routes/Create";
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/'element={<Cards />} />
        <Route path='/Create-Todo' element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
