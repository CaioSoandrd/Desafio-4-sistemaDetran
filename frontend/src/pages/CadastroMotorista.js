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
        <h2>Cadastro de motorista</h2>
        <form>
        <form>
  <input type="text" placeholder="Nome do condutor" />
  <input type="text" placeholder="CPF" />
  <input type="text" placeholder="Data de nascimento" />
  

  <input type="text" placeholder="CEP"/>
  <input type="text" placeholder="Número de telefone"/>

    {/* Campo de seleção para Sexo */}
    <select className="input-field">
    <option value="">Selecione o sexo</option>
    <option value="masculino">Masculino</option>
    <option value="feminino">Feminino</option>
  </select>

</form>

        </form>
      </div>
    </div>
  );
};

export default CadastroMotorista;
