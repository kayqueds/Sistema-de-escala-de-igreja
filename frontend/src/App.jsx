
import { db } from './services/firebase';
import { useEffect } from 'react';  // Se não estiver importado ainda
import { BrowserRouter } from "react-router-dom";
import Rotas from "./routes/Rotas.jsx";
import { Footer } from "./components/common/footer/Footer.jsx";
import { Header } from "./components/common/header/Header.jsx";
import { Navigation } from "./components/common/navigation/Navigation.jsx";



function App(){

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
