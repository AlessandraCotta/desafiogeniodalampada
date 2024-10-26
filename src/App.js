import React, { useState } from "react";
import "./App.scss";

export default function App() {
  const [lampada, setLampada] = useState(false);

  const trocarLampada = () => {
    setLampada(!lampada);
  };

  return (
    <main>
      <h1 className="titulo">
        "Liberte a magia da programação com a lâmpada de Aladim."
      </h1>
      <img
        src={
          lampada
            ? "https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada-com-mago.png?raw=true"
            : "https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada.png?raw=true"
        }
        alt="Lâmpada"
        onClick={trocarLampada}
      />
    </main>
  );
}

//coloquei o link pra não esquecer pedi ajuda na fé e you tube  .
//https://codesandbox.io/p/sandbox/y6w7x4?file=%2Fsrc%2FApp.js%3A1%2C1-39%2C1
