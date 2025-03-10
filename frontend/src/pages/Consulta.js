import React from "react";
import "./Home.css";
import logo from "../assets/logo.png"; 
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        <img src={logo} alt="Logo Detran" className="logo" />
        <h1 className="title">Sistema de Multas Detran</h1>
      </header>
      <div className="content">
      <Link to="/ConsultaMotorista" className="card-link">
          <div className="card">Consulta de motoristas</div>
        </Link>

        <Link to="/ConsultaVeiculo" className="card-link">
          <div className="card">Consulta de veículo</div>
        </Link>

        <Link to="/ConsultaMulta" className="card-link">
          <div className="card">Consulta de Multas</div>
        </Link>
        <Link to="/ConsultaPontuacao" className="card-link">
          <div className="card">Consulta de pontuação</div>
        </Link>

      </div>
    </div>
  );
};

export default Home;
