import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CadastroMotorista.css";
import logo from "../assets/logo.png";

const CadastroMotorista = () => {
  const navigate = useNavigate();
  
  //armazenar os valores digitados
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [pontos, setPontos] = useState("");

  // Função para enviar os dados ao backend
  const handleCadastro = async (event) => {
    event.preventDefault();

    // Criar objeto com os dados do motorista
    const motorista = {
      nome,
      cpf,
      pontos: parseInt(pontos), 
    };

    try {
      
      const resposta = await fetch("http://localhost:5001/api/motoristas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(motorista),
      });

      if (resposta.ok) {
        alert("Motorista cadastrado com sucesso!");
        navigate("/");
      } else {
        alert("Erro ao cadastrar motorista!");
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
        <h2>Cadastro de motorista</h2>
        <form onSubmit={handleCadastro}>
          <input
            type="text"
            placeholder="Nome do condutor"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="CPF"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Pontos"
            value={pontos}
            onChange={(e) => setPontos(e.target.value)}
            required
          />
          <button type="submit" className="btn-cadastrar">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default CadastroMotorista;
