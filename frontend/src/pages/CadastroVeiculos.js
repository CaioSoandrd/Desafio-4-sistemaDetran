import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CadastroMotorista.css";
import logo from "../assets/logo.png";

const CadastroVeiculos = () => {
  const navigate = useNavigate();

  // Armazena os valores digitados
  const [motoristaId, setMotoristaId] = useState("");
  const [placa, setPlaca] = useState("");
  const [modelo, setModelo] = useState("");
  const [cor, setCor] = useState("");

  // Função para enviar os dados ao backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!motoristaId.trim() || !placa.trim() || !modelo.trim() || !cor.trim()) {
      alert("Preencha todos os campos!");
      return;
    }

    const veiculo = {
      placa,
      modelo,
      cor,
      motorista_id: parseInt(motoristaId, 10), // Certificando que seja um número inteiro
    };

    try {
      const resposta = await fetch("http://localhost:5001/api/veiculos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(veiculo),
      });

      if (resposta.ok) {
        alert("Veículo cadastrado com sucesso!");
        navigate("/");
      } else {
        alert("Erro ao cadastrar veículo!");
      }
    } catch (error) {
      console.error("Erro ao cadastrar veículo:", error);
      alert("Erro ao cadastrar veículo. Verifique os dados e tente novamente.");
    }
  };

  return (
    <div className="cadastro-container">
      <header className="header">
        <img src={logo} alt="Logo Detran" className="logo" />
        <h1 className="titulo">Cadastro de Veículos</h1>
      </header>

      <div className="form-container">
        <h2>Cadastro de Veículos</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Placa"
            value={placa}
            onChange={(e) => setPlaca(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Modelo"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Cor"
            value={cor}
            onChange={(e) => setCor(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="CPF"
            value={motoristaId}
            onChange={(e) => setMotoristaId(e.target.value)}
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

export default CadastroVeiculos;
