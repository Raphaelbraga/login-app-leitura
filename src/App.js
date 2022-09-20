import { getDefaultNormalizer } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./home";
import { consultar } from "./storage";
import "./style.css"

function App() {
  return (
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
  );
}

function Login() {
  const navigate = useNavigate();
  const [todosUsuarios, setTodosUsuarios] = useState([{
    email: "admin@admin.com",
    senha: "admin"
  }])

  useEffect(() => {
    const dados = consultar();
    setTodosUsuarios((current) => [...current, ...dados]);
  }, []);

  const [nome, setNome] = useState("");
  const [email, setemail] = useState("");
  const [senha, setSenha] = useState("");

  const logar = () => {
    const validar = !!todosUsuarios.filter((item) => item.email === email && item.senha === senha).length;

    if (validar) {
      alert("usuario logado com sucesso");
      navigate("/home");
    } else {
      alert("usuario ou senha incorretos");
    }
  }

  return (
    <div className="App">
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

        <div className="botaoLogin">
          <button onClick={logar}>Login</button>
        </div>

      </div>

    </div>
  );
}

export default App;
