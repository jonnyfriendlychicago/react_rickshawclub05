import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Link, Navigate, HashRouter} from "react-router-dom";

// import React from "react";
import Header from "./Components/PageLayout/Header";
import Home from "./Components/Verticals/Home";
import Rickshaws from "./Components/Verticals/Rickshaws";

function App() {
    return (
        <>
            <BrowserRouter basename="/">
                {/*<HashRouter basename="/">*/}
                <Header/>
                <Routes>

                    <Route path="/" element={<Home/>} />

                    <Route path="/rickshaws" element={<Rickshaws/>} />

                    {/*<redirect to="/" />*/}
                    <Route path='*' element={<Navigate to='/' />} />
                </Routes>
            </BrowserRouter>
            {/*</HashRouter>*/}
        </>

    );
}

export default App;
