import React, { useState } from 'react';
import Container from '../Components/Container/Container';
import TaskCard from '../Components/TaskCard/TaskCard';
import Task from '../Task/Task';
import Modal from '../Components/Modal/Modal';

const ToDoList = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [todos, setTodos] = useState([
        'Task 1',
        'Task 2',
        'Task 3'
    ]);
    const [filter, setFilter] = useState('');
    const handleChange = (event) => {
        setFilter(event.target.value);
      };
      
      const filteredWords = todos.filter(todos =>
        todos.toLowerCase().includes(filter.toLowerCase())
      );

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const addTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
        closeModal();
    };

    const deleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    const editTodo = (index, newText) => {
        const updatedTodos = todos.map((todo, i) =>
            i === index ? newText : todo
        );
        setTodos(updatedTodos);
    };

    return (
        <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'linear-gradient(to right, #1E123B, #8758FF)', width: '100%', height: '100%' }}>
            <Container>
                <TaskCard>
                    {todos.map((todo, index) => (
                        <Task
                            key={index}
                            text={todo}
                            index={index}
                            onDelete={deleteTodo}
                            onEdit={editTodo}
                        />
                    ))}
                </TaskCard>
                <Modal isOpen={isModalOpen} onClose={closeModal} onAddTodo={addTodo}/>
            </Container>
        </main>
    );
};

export default ToDoList;