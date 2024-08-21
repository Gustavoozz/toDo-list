import React from "react";
import './TaskCard.css'
import Input from "../Input/Input";
import Task from "../../Task/Task";

const TaskCard = () => {
    const date = new Date().toLocaleString("pt-BR", {
        weekday: "long",
        day: "numeric",
        month: "long",
      });

     
    
    return (
        <div className="cardContainer">
            <h1 className="actualDate">{date}</h1>
            <Input
            placeholder={"Search task"}
            type="text"
            />

            <Task />



        </div>
    );
};

export default TaskCard;