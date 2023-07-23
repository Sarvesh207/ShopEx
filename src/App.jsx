import React from "react";

import './App.css'
import Body from "./Components/Body/Body";
import Head from './Components/Head/Navbar/Navbar'
import { Outlet } from "react-router-dom";
const App = () => {
  return <div className="app">
    <Head/>
    <Body/>
  </div>;
};

export default App;
