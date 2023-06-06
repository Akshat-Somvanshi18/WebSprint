import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import PartnerSection from './components/PartnerSection';
import ProvideSection from './components/ProvideSection';
import Review from './components/Review';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar/>
    <LandingPage/>
    <PartnerSection/>
    <ProvideSection/>
    <Review/>
    <Footer/>
    </>
  );
}

export default App;
