import React from 'react';
import { Route, Routes } from "react-router-dom";
import Cards from "./routes/Cards";
import Create from "./routes/Create";
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Cards />
  },
  {
    path: "/Create",
    element: <Create />
  }
]);

function App() {
  return (
    <div>
          <RouterProvider router={router} />
    </div>
  );
}

export default App;
