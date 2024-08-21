import React from "react";
import './TaskCard.css'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTimes } from "@fortawesome/free-solid-svg-icons";

const TaskCard = ({ id, name, completed, onClick, onChange }) => {
    const completedClass = completed ? 'concluida' : '';

    return (
        <div key={id} className={`tarefa ${completedClass}`}>
            <label className="etiqueta-tarefa">
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={onChange}
                    id={`checkbox-${id}`}
                />
                <span className={`nome ${completedClass}`}>{name}</span>
            </label>
            <button className={`botao-deletar ${completedClass}`} onClick={onClick}>
                <FontAwesomeIcon color={completed ? "#FFFFFF" : "#1E123B"} icon={faTimes} />
            </button>
            <button className={`botao-editar ${completedClass}`}>
                <FontAwesomeIcon color={completed ? "#FFFFFF" : "#1E123B"} icon={faPen} />
            </button>
        </div>
    );
};

export default TaskCard;
