import React from "react";
import { useNavigate } from "react-router-dom";
import "./CadastroMotorista.css"; 
import logo from "../assets/logo.png"; 

const CadastroVeiculos = () => {
  const navigate = useNavigate(); // Hook para navegação

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita recarregar a página
    alert("Veículo cadastrado com sucesso!"); // Apenas um alerta de simulação
    navigate("/"); // Redireciona para a Home
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
          <input type="text" placeholder="Placa" required />
          <input type="text" placeholder="Cor" required />
          <input type="text" placeholder="Modelo" required />

          {/* Botão de cadastrar */}
          <button type="submit" className="btn-cadastrar">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default CadastroVeiculos;
