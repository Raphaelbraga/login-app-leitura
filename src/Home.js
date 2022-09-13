import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import App from "./App";
import "./style.css"

function Home() {

  return (
    <Routes>
      <Route path="/" exact element={<Cadastro />} />
      <Route path="/App" element={<App />} />
    </Routes>
  );
}

function Cadastro() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setemail] = useState("");
  const [senha, setSenha] = useState("");
  const [tipo, setTipo] = useState("");

  const armazenar = (chave, valor) => {
    localStorage.setItem(chave, JSON.stringify(valor))
  }
  const consulta = (chave) => {
    alert(localStorage.getItem(chave))
  }

  const apagar =(chave) => {
    localStorage.removeItem(chave)
  }
  const salvar = ()=> {
    const usuario = {
      nome,
      email,
      senha,
    };
    armazenar("dados_de_acesso",usuario);
  }

  const consultar =() =>{
    consulta("dados_de_acesso");
  }

  const logout = () => {
    // ativar component alert para confirmação depois sair
    navigate("/");
  }

  return (
    <div className="TelaInicial">
      <div className="Logout">
        <button onClick={logout}>Logout</button>
      </div>
      <div className="Menu">
        <div className="nome"></div>
        <div className="nome"></div>
        <div className="nome"></div>
      </div>

      <button onClick={salvar}>salvar</button>
      <button onClick={consultar}>consultar</button>
    </div>
  );

}


export default Home;