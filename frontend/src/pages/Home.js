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
      <Link to="/cadastro" className="card-link">
          <div className="card">Realizar Cadastro</div>
        </Link>

        <Link to="/Consulta" className="card-link">
          <div className="card">Realizar Consulta</div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
