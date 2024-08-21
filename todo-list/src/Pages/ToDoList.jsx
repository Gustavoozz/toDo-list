import React from "react";
import Container from "../Components/Container/Container";
import TaskCard from "../Components/TaskCard/TaskCard";
import Button from "../Components/Button/Button";
import Task from "../Task/Task";


const ToDoList = () => {
    return (
        <Container>
            <TaskCard />

            <Button />

            
        </Container>
    );
};

export default ToDoList;