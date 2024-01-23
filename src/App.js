import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Reservation from "./pages/Reservation";
import Board from "./pages/Board";
import Setting from "./pages/Setting";
import EventPlaceList from "./pages/EventPlaceList";

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/reservation" element={<Reservation/>}></Route>
            <Route path="/board" element={<Board/>}></Route>
            <Route path="/setting" element={<Setting/>}></Route>
            <Route path="/list" element={<EventPlaceList/>}></Route>
        </Routes>
        <Navbar />

    </BrowserRouter>
  );
}

export default App;
