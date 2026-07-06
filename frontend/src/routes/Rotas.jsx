import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Cadastro from "../pages/cadastro/Cadastro";
import Error404 from "../pages/error404/Error404";
import Ocorrencias from "../pages/ocorrencias/Ocorrencias";
import LeaderDashboard from "../pages/leader/LeaderDashboard";
import Escalas from "../pages/leader/escalas/Escalas";
import Membros from "../pages/leader/membros/Membros";
import OcorrenciasPendentes from "../pages/leader/ocorrencias/OcorrenciasPendentes";

// rotas do site
function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/ocorrencias" element={<Ocorrencias />} />
      
      {/* Rotas do Líder */}
      <Route path="/leader" element={<LeaderDashboard />}>
        <Route path="escalas" element={<Escalas />} />
        <Route path="membros" element={<Membros />} />
        <Route path="ocorrencias" element={<OcorrenciasPendentes />} />
      </Route>

      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default Rotas;  