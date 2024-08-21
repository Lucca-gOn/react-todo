import React, { useState } from "react";
import "./HomePage.css";
import TaskCard from "../../components/TaskCard/TaskCard";
import Data from "../../components/Data/Data";
import Container from "../../components/Container/Container";
import ContainerBox from "../../components/ContainerBox/ContainerBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Modal from "../../components/Modal/Modal"; // Importe o Modal aqui

const HomePage = () => {
  const [tarefas, setTarefas] = useState([
    { id: 1, nome: "Começar a execução do projeto", concluida: false },
  ]);
  const [isModalOpen, setModalOpen] = useState(false); // Estado para controlar a visibilidade do modal

  const alternarConclusaoTarefa = (id) => {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
      )
    );
  };

  const deletarTarefa = (id) => {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  };

  const adicionarTarefa = () => {
    setModalOpen(true); // Abre o modal ao clicar em 'Nova tarefa'
  };

  const fecharModal = () => {
    setModalOpen(false); // Função para fechar o modal
  };

  return (
    <Container>
      <ContainerBox>
        <Data />
        <div class="search-container">
          <div class="search-input-box">
            <FontAwesomeIcon icon={faSearch} color="white" />
            <input
              type="text"
              placeholder="Procurar tarefa"
              className="search-input"
            />
          </div>
        </div>

        {tarefas.map((tarefa) => (
          <TaskCard
            key={tarefa.id}
            id={tarefa.id}
            name={tarefa.nome}
            completed={tarefa.concluida}
            onClick={() => deletarTarefa(tarefa.id)}
            onChange={() => alternarConclusaoTarefa(tarefa.id)}
          />
        ))}
      </ContainerBox>
      <div
        style={{
          marginTop: "17px",
          width: "743px",
          display: "flex",
          justifyContent: "end",
        }}
      >
        <button className="add-task-btn" onClick={adicionarTarefa}>
          Nova tarefa
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={fecharModal}>
        <h1 className="modalTitle">Descreva sua tarefa</h1>
        <input
          type="text"
          placeholder="Exemplo de descrição"
          className="modal-input"
        />
      </Modal>
    </Container>
  );
};

export default HomePage;
