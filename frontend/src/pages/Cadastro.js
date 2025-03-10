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
      <Link to="/CadastroMotorista" className="card-link">
          <div className="card">Cadastro de motorista</div>
        </Link>

        <Link to="/CadastroVeiculos" className="card-link">
          <div className="card">Cadastro de veículos</div>
        </Link>

        <Link to="/CadastroMultas" className="card-link">
          <div className="card">Cadastro de Multas</div>
        </Link>

      </div>
    </div>
  );
};

export default Home;
