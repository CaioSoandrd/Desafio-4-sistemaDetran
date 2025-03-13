import React, { useState } from "react";
import "./ConsultaMotorista.css";
import logo from "../assets/logo.png";

const ConsultaMulta = () => {
  const [idMulta, setIdMulta] = useState("");
  const [multa, setMulta] = useState(null);
  const [erro, setErro] = useState("");

  const buscarMulta = async () => {
    if (!idMulta) {
      setErro("Digite um ID válido.");
      return;
    }

    try {
      setErro("");

      const resposta = await fetch(`http://localhost:5001/api/multas/${idMulta}`);
      if (!resposta.ok) {
        throw new Error("Multa não encontrada");
      }
      const dados = await resposta.json();

      setMulta(dados);
    } catch (error) {
      setErro(error.message);
      setMulta(null);
    }
  };

  return (
    <div className="consulta-container">
      <header className="header">
        <img src={logo} alt="Logo Detran" className="logo" />
        <h1 className="title">Sistema de Multas Detran</h1>
      </header>

      <div className="consulta-form">
        <h2>Consulta de Multa</h2>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Digite o ID da infração"
            value={idMulta}
            onChange={(e) => setIdMulta(e.target.value)}
          />
          <button onClick={buscarMulta} className="search-button">🔍</button>
        </div>

        {erro && <p className="erro">{erro}</p>}

        {multa && (
          <div className="resultado">

            <p><strong>Data:</strong> {multa.data}</p>
            <p><strong>Valor:</strong> {multa.valor}</p>
            <p><strong>Descrição:</strong> {multa.descricao}</p>
            <p><strong>Pontos:</strong> {multa.pontos}</p>

          </div>
        )}
      </div>
    </div>
  );
};

export default ConsultaMulta;
