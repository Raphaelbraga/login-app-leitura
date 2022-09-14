import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { consultar, armazenar } from "./storage";
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

  const [cadastrados, setCadastrados] = useState([]);

  const [nome, setNome] = useState("");
  const [email, setemail] = useState("");
  const [senha, setSenha] = useState("");

  useEffect(() => {
    const retorno = consultar();
    setCadastrados(retorno);
  }, []);

  const logout = () => {
    // ativar component alert para confirmação depois sair
    navigate("/");
  }

  const onSalvar = () => {
    const usuario = {
      nome,
      email,
      senha,
    };
    
    // salva
    armazenar([...cadastrados, usuario]);

    // busca
    const retorno = consultar();
    setCadastrados(retorno);
  }

  return (
    <div className="TelaInicial">
      <h3> Tela cadastro de usuários</h3>

      <div className="Fomulario">
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
      </div>

      <button onClick={onSalvar}>salvar</button>

      <div className="Logout">
        <button onClick={logout}>Logout</button>
      </div>

      <div>
        <p>Cadastrados</p>
        <br />

        {cadastrados.map((item) => {
          return (
            <div style={{ display: "flex"}}>
              <p>{item.nome} - {item.email}</p>
              
              <button onClick={() => {
                setNome(item.nome);
                setemail(item.email);
                setSenha("");
              }}>alterar</button>
              
              <button onClick={() => {
                const posicao = cadastrados.indexOf(item);
                cadastrados.splice(posicao, 1);
                armazenar(cadastrados);

                // busca
                const retorno = consultar();
                setCadastrados(retorno);
              }}>deletar</button>
            </div>
          );
        })}
      </div>
    </div>
  );

}


export default Home;