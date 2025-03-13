import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CadastroMotorista.css";
import logo from "../assets/logo.png";

const CadastroMultas = () => {
  const navigate = useNavigate();

  // Estados para armazenar os valores dos campos do formulário
  const [data, setData] = useState("");
  const [valor, setValor] = useState("");
  const [descricao, setDescricao] = useState("");
  const [pontos, setPontos] = useState("");
  const [motoristaId, setMotoristaId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Garantir que a data esteja no formato adequado (YYYY-MM-DD)
    const formattedDate = new Date(data).toISOString().split("T")[0];

    const multa = {
      data: formattedDate,
      valor: parseFloat(valor),
      pontos: parseInt(pontos),
      descricao,
      motorista_id: parseInt(motoristaId), // Certifique-se que seja um número válido
    };

    try {
      const resposta = await fetch("http://localhost:5001/api/multas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(multa),
      });

      if (!resposta.ok) {
        throw new Error("Erro ao cadastrar multa!");
      }

      alert("Multa cadastrada com sucesso!");
      navigate("/");
    } catch (erro) {
      console.error("Erro ao cadastrar:", erro);
      alert("Erro ao cadastrar multa. Verifique os dados e tente novamente.");
    }
  };

  return (
    <div className="cadastro-container">
      <header className="header">
        <img src={logo} alt="Logo Detran" className="logo" />
        <h1 className="titulo">Cadastro de Multas</h1>
      </header>

      <div className="cadastro-form">
        <form onSubmit={handleSubmit}>
          <label>Data</label>
          <input
            type="date"
            value={data}
            onChange={(e) => setData(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Valor da Multa"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Pontos na CNH"
            value={pontos}
            onChange={(e) => setPontos(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Descrição"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="CPF"
            value={motoristaId}
            onChange={(e) => setMotoristaId(e.target.value)}
            required
          />

          <button type="submit" className="btn-cadastrar" onClick={handleSubmit}>
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default CadastroMultas;