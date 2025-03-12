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
<<<<<<< HEAD
  <input type="text" placeholder="Infração" />
  <input type="text" placeholder="Velocidade indentificada" />
  <input type="text" placeholder="Data" />
  

  <input type="text" placeholder="Hora"/>
  <input type="text" placeholder="Placa do veículo"/>
  <input type="text" placeholder="Lugar"/>
  <input type="text" placeholder="Tipo de infração"/>
=======

  <input type="text" placeholder="Data" />
  

  <input type="text" placeholder="Valor"/>
  <input type="text" placeholder="Descriçao"/>
  <input type="text" placeholder="Pontos"/>

>>>>>>> eace26b (campos de cadastro e consulta atualizados)


</form>

        </form>
      </div>
    </div>
  );
};

export default CadastroMotorista;
