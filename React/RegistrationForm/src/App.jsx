import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Registration from './pages/Registration';
import {Toaster} from 'react-hot-toast';


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Toaster/>
    <Header/>
    <Routes>
        <Route path="/" element={<Registration />} />   
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App