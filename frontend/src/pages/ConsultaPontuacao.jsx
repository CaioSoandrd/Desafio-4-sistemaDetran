import React, { useState } from "react";
import "./ConsultaMotorista.css";
import logo from "../assets/logo.png";


const ConsultaPontuacao = () => {

  const [cpf, setCpf] = useState("");
  const [motorista, setMotorista] = useState(null);
  const [erro, setErro] = useState("");

  const buscarMotorista = async () => {
    if (cpf.length !== 11) {
      setErro("CPF deve ter 11 dígitos.");
      return;
    }

    try {
      setErro("");



      const resposta = await fetch(`http://localhost:5000/motoristas/pontuacao/${cpf}`);

      if (!resposta.ok) {
        throw new Error("Motorista não encontrado ou com menos de 10 pontos");

      }
      const dados = await resposta.json();

      setMotorista(dados);
    } catch (error) {
      setErro(error.message);
      setMotorista(null);
    }
  };

  return (
    <div className="consulta-container">
      <header className="header">
        <img src={logo} alt="Logo Detran" className="logo" />
        <h1 className="title">Sistema de Multas Detran</h1>
      </header>

      <div className="consulta-form">
        <h2>Consulta de Pontuação (mais de 10 pontos)</h2>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Digite o CPF do condutor"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            maxLength="11"
          />
          <button onClick={buscarMotorista} className="search-button">🔍</button>
        </div>

        {erro && <p className="erro">{erro}</p>}

        {motorista && (
          <div className="resultado">

            <p><strong>Nome:</strong> {motorista.nome}</p>
            <p><strong>CPF:</strong> {motorista.cpf}</p>
            <p><strong>Pontuação:</strong> {motorista.pontos}</p>

          </div>
        )}
      </div>
    </div>
  );
};


export default ConsultaPontuacao;

