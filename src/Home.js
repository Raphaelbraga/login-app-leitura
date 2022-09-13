import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import App from "./App";
import "./style.css"

function Home() {

  return (
    <Routes>
      <Route path="/" exact element={<Fatura />} />
      <Route path="/App" element={<App />} /> 
    </Routes>
  );
}

function Fatura() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setemail] = useState("");
  const [senha, setSenha] = useState("");
  const [tipo, setTipo] = useState("");

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
    </div>
  );

}


export default Home;