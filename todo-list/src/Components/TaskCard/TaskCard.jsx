import React, { useState } from 'react';
import './TaskCard.css';
import Input from '../Input/Input'; // Verifique o caminho para o componente Input
import Task from '../../Task/Task'; // Verifique o caminho para o componente Task
import Modal from '../Modal/Modal'; // Verifique o caminho para o componente Modal
import Button from '../Button/Button';

const TaskCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('');

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

 
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };


  const filteredTodos = todos.filter(todo =>
    todo.toLowerCase().includes(filter.toLowerCase())
  );

  const date = new Date().toLocaleString('pt-BR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });

  return (
    <div className="cardContainer">
      <h1 className="actualDate">{date}</h1>
      
     
      <Input 
        placeholder="Search task..." 
        type="text" 
        value={filter}
        onChange={handleFilterChange}
      />

      <Button className="add-task-button" onClick={openModal}>
        Add Task
      </Button>

      <div className="task-list">
        {filteredTodos.map((todo, index) => (
          <Task
            key={index}
            text={todo}
            index={index} 
            onDelete={deleteTodo}
            onEdit={editTodo} 
          />
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} onAddTodo={addTodo} />
    </div>
  );
};

export default TaskCard;