
import { useState, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import Rotas from "./routes/Rotas.jsx";
import { Footer } from "./components/common/footer/Footer.jsx";
import { Header } from "./components/common/header/Header.jsx";
import { Navigation } from "./components/common/navigation/Navigation.jsx";
// import { seedMembros } from './services/seedMembros';


function App(){
useEffect({
    // seedMembros()
}, [])

  return(
    <BrowserRouter>
        <Header />
        <Navigation />
        <Rotas />
        <Footer />
    </BrowserRouter>
  )
}
export default App
