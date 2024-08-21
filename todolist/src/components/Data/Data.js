import React from "react";
import "./Data.css";

const capitalizarPrimeiraLetra = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const Data = () => {
  const data = new Date();
  const opcoes = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const dataFormatada = data.toLocaleDateString("pt-BR", opcoes);
  console.log(dataFormatada);  // Adicione esta linha para ver como a data está formatada

  const partes = dataFormatada.split(" de ");
  const diaSemana = capitalizarPrimeiraLetra(partes[0]);
  const dia = partes[1].split(" ")[0];  // Corrigir se necessário baseado no log
  const mes = capitalizarPrimeiraLetra(partes[2].split(" ")[0]);

  return (
    <>
      <h1>
        {diaSemana} <strong className="dia">{dia}</strong> de {mes}
      </h1>
    </>
  );
};

export default Data;
