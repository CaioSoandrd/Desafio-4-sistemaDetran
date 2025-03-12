import React from "react";
import { Link } from "react-router-dom";
import "./CadastroMotorista.css";
import logo from "../assets/logo.png"; 

const CadastroMotorista = () => {
  return (
    <div className="cadastro-container">
      <header className="header">
        <img src={logo} alt="Logo Detran" className="logo" />
        <h1 className="title">Sistema de Multas Detran</h1>
      </header>

      <div className="form-container">
        <h2>Cadastro de Multas</h2>
        <form>
        <form>

  <input type="text" placeholder="Data" />
  

  <input type="text" placeholder="Valor"/>
  <input type="text" placeholder="Descriçao"/>
  <input type="text" placeholder="Pontos"/>



</form>

        </form>
      </div>
    </div>
  );
};

export default CadastroMotorista;
