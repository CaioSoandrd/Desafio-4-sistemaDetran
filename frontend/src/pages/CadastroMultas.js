import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { criarMulta } from "../services/multaService"; // Importando o serviço
import "./CadastroMotorista.css";
import logo from "../assets/logo.png";

const CadastroMultas = () => {
  const navigate = useNavigate();
  const [data, setData] = useState("");
  const [valor, setValor] = useState("");
  const [descricao, setDescricao] = useState("");
  const [pontos, setPontos] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const multa = {
      data,
      valor: parseFloat(valor),
      descricao,
      pontos: parseInt(pontos),
    };

    try {
      const response = await criarMulta(multa);
      if (response) {
        alert("Multa cadastrada com sucesso!");
        navigate("/");
      } else {
        alert("Erro ao cadastrar multa!");
      }
    } catch (erro) {
      console.error("Erro ao cadastrar:", erro);
      alert("Erro de conexão com o servidor!");
    }
  };

// ... resto do código permanece igual ...