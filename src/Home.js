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

  const apagar = (chave) => {
    localStorage.removeItem(chave)
  }
  const salvar = () => {
    const usuario = {
      nome,
      email,
      senha,
    };
    armazenar("dados_de_acesso", usuario);
  }

  const consultar = () => {
    consulta("dados_de_acesso");
  }
  
  const logout = () => {
    // ativar component alert para confirmação depois sair
    navigate("/");
  }
  
  return (
    <div className="TelaInicial">
      <header>
      <h3> Tela cadastro de usuários</h3>
      <button onClick={logout}>Logout</button>
      </header>
     
      <div className="Formulario">
        <div>
          <input className="nome"
            placeholder="nome"
            name="nome"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />
        </div>

        <div>
        <input className="email"
            placeholder="email"
            name="email"
            value={email}
            onChange={(event) => setemail(event.target.value)}
          />
        </div>

        <div>
          <input className="senha"
            placeholder="senha"
            name="senha"
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
          />
        </div>

        <button onClick={salvar}>salvar</button>
      </div>
      <section>
        <button onClick={consultar}>consultar</button>
      </section>

    </div>
  );

}


export default Home;