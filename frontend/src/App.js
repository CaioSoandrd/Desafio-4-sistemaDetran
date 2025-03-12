import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import CadastroMotorista from "./pages/CadastroMotorista";
import CadastroVeiculos from "./pages/CadastroVeiculos"; 
import CadastroMultas from "./pages/CadastroMultas";
import Consulta from "./pages/Consulta";
import ConsultaMotorista from "./pages/ConsultaMotorista";
import ConsultaVeiculo from "./pages/ConsultaVeiculo"
import ConsultaMulta from "./pages/ConsultaMulta";
import ConsultaPontuacao from "./pages/ConsultaPontuacao";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/cadastroMotorista" element={<CadastroMotorista />} />
        <Route path="/CadastroVeiculos" element={<CadastroVeiculos />} />
        <Route path="/CadastroMultas" element={<CadastroMultas />} />
        <Route path="/Consulta" element={<Consulta />} />
        <Route path="/ConsultaMotorista" element={<ConsultaMotorista />} />
        <Route path="/ConsultaVeiculo" element={<ConsultaVeiculo />} />
        <Route path="/consultaMulta" element={<ConsultaMulta />} />
        <Route path="/ConsultaPontuacao" element={<ConsultaPontuacao />} />
        
      </Routes>
    </Router>
  );
}

export default App;
