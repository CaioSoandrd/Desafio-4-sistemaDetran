import React, { useState } from "react";
import "./ConsultaMotorista.css"; 
import logo from "../assets/logo.png";

const ConsultaVeiculo = () => {
  const [placa, setPlaca] = useState("");
  const [veiculo, setVeiculo] = useState(null);
  const [erro, setErro] = useState(""); 

  const buscarVeiculo = async () => {
    if (placa.length < 7) {
      setErro("A placa deve ter pelo menos 7 caracteres.");
      return;
    }

    try {
      setErro(""); 

      const resposta = await fetch(`http://localhost:5001/veiculos/${placa}`);
      if (!resposta.ok) {
        throw new Error("Veículo não encontrado");
      }
      const dados = await resposta.json();

      setVeiculo(dados);
    } catch (error) {
      setErro(error.message);
      setVeiculo(null);
    }
  };

  return (
    <div className="consulta-container">
      <header className="header">
        <img src={logo} alt="Logo Detran" className="logo" />
        <h1 className="title">Sistema de Multas Detran</h1>
      </header>

      <div className="consulta-form">
        <h2>Consulta de Veículo</h2>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Digite a placa do veículo"
            value={placa}
            onChange={(e) => setPlaca(e.target.value.toUpperCase())}
            maxLength="7"
          />
          <button onClick={buscarVeiculo} className="search-button">🔍</button>
        </div>

        {erro && <p className="erro">{erro}</p>}

        {veiculo && (
          <div className="resultado">
            <p><strong>Placa:</strong> {veiculo.placa}</p>
            <p><strong>Modelo:</strong> {veiculo.modelo}</p>
            <p><strong>Cor:</strong> {veiculo.cor}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConsultaVeiculo;
