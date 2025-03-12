import React from "react";
import { useNavigate } from "react-router-dom";
import "./CadastroMotorista.css";
import logo from "../assets/logo.png";

const CadastroMotorista = () => {
  const navigate = useNavigate();

  const handleCadastro = (event) => {
    event.preventDefault();

    navigate("/");
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
          <input type="text" placeholder="Nome do condutor" required />
          <input type="text" placeholder="CPF" required />
          <input type="text" placeholder="Pontos" required />
          <button type="submit" className="btn-cadastrar">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default CadastroMotorista;