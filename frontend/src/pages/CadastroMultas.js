import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CadastroMotorista.css";
import logo from "../assets/logo.png";

const CadastroMultas = () => {
  const navigate = useNavigate();

  // Armazena os valores digitados
  const [data, setData] = useState("");
  const [valor, setValor] = useState("");
  const [descricao, setDescricao] = useState("");
  const [pontos, setPontos] = useState("");

  // Função para enviar os dados ao backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Criar objeto com os dados da multa
    const multa = {
      data,
      valor: parseFloat(valor), 
      descricao,
      pontos: parseInt(pontos), 
    };

    try {
      const resposta = await fetch("http://localhost:5001/api/multas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(multa),
      });

      if (resposta.ok) {
        alert("Multa cadastrada com sucesso!");
        navigate("/");
      } else {
        alert("Erro ao cadastrar multa!");
      }
    } catch (erro) {
      console.error("Erro ao cadastrar:", erro);
      alert("Erro de conexão com o servidor!");
    }
  };

  return (
    <div className="cadastro-container">
      <header className="header">
        <img src={logo} alt="Logo Detran" className="logo" />
        <h1 className="title">Sistema de Multas Detran</h1>
      </header>

      <div className="form-container">
        <h2>Cadastro de Multas</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Data"
            value={data}
            onChange={(e) => setData(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Valor"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
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
            placeholder="Pontos"
            value={pontos}
            onChange={(e) => setPontos(e.target.value)}
            required
          />

          <button type="submit" className="btn-cadastrar">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default CadastroMultas;
