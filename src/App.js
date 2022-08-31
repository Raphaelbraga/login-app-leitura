import { useState } from "react";

function App() {
const [valor, setValor] = useState ({
  Nome: '',
  SobreNome: '',
  Email:'',
})

  return (
    <div className="App">
      <div className="formulario">
          <form>
            <imput className="campoNome"
              placeholder = "nome"
              name="nome"
            ></imput>
          </form>
      </div>
      
    </div>
  );
}

export default App;
