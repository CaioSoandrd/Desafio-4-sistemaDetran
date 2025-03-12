import React from "react";
import { Link } from "react-router-dom";
import "./CadastroMotorista.css";
import logo from "../assets/logo.png";

const CadastroVeiculos = () => {
  return (
    <div className="cadastro-container">
      <header className="header">
        <img src={logo} alt="Logo Detran" className="logo" />
        <h1 className="title">Sistema de Multas Detran</h1>
      </header>

      <div className="form-container">
        <h2>Cadastro de Veículos</h2> { }

        <form>
          <input type="text" placeholder="Placa" />

          <input type="text" placeholder="Cor" />
          <input type="text" placeholder="Modelo" />


        </form>
      </div>
    </div>
  );
};

export default CadastroVeiculos;
