import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Link, Navigate, HashRouter} from "react-router-dom";

// import React from "react";
import Header from "./Components/PageLayout/Header";
import Home from "./Components/Verticals/Home";
import Rickshaws from "./Components/Verticals/Rickshaws";
import Gear from "./Components/Verticals/Gear";
import Community from "./Components/Verticals/Community";
import About from "./Components/Verticals/About";
import Join from "./Components/Verticals/Join";

function App() {
    return (
        <>
            <BrowserRouter basename="/">
                {/*<HashRouter basename="/">*/}
                <Header/>
                <Routes>

                    <Route path="/" element={<Home/>} />

                    <Route path="/rickshaws" element={<Rickshaws/>} />

                    <Route path="/gear" element={<Gear/>} />

                    <Route path="/community" element={<Community/>} />

                    <Route path="/about" element={<About/>} />

                    <Route path="/join" element={<Join/>} />


                    <Route path='*' element={<Navigate to='/' />} />
                </Routes>
            </BrowserRouter>
            {/*</HashRouter>*/}
        </>

    );
}

export default App;
