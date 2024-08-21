import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, onAddTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  if (!isOpen) return null;

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      onAddTodo(newTodo); 
      setNewTodo(''); 
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>x</button>
        <h1 style={{ color: '#FAFAFA', fontFamily: 'Poppins'}}>Descreva sua tarefa</h1>
        <input
          placeholder='Exemplo de descrição...'
          className="searchInputHigh"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={handleAddTodo} className='buttonConfirm'>
          Adicionar
        </button>
      </div>
    </div>
  );
};

export default Modal;