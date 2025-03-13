import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { criarVeiculo } from "../services/veiculoService";
import "./CadastroMotorista.css";
import logo from "../assets/logo.png";

const CadastroVeiculos = () => {
  const navigate = useNavigate();

  const [placa, setPlaca] = useState("");
  const [cor, setCor] = useState("");
  const [modelo, setModelo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const veiculo = {
      placa,
      cor,
      modelo,
    };

    try {
      const response = await criarVeiculo(veiculo);
      if (response) {
        alert("Veículo cadastrado com sucesso!");
        navigate("/");
      } else {
        alert("Erro ao cadastrar veículo!");
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
                placeholder="Cor"
                value={cor}
                onChange={(e) => setCor(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Modelo"
                value={modelo}
                onChange={(e) => setModelo(e.target.value)}
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