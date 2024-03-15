import React from "react";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import TechComponent from "./components/TechComponent";

function App() {
  return (
    <div className="App sm:w-8/12 m-auto h-[80vh]">
      <Header />
      <div className="sm:w-[85%] m-auto">
        <TechComponent />
        <NavBar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
