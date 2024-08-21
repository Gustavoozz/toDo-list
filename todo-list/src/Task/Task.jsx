import React, { useState } from 'react';
import './Task.css';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { GoPencil } from 'react-icons/go';
import { FaCheck } from 'react-icons/fa';

const Task = ({ text, index, onDelete, onEdit }) => {
    const [checked, setChecked] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(text);

    const backgroundColor = checked ? '#6C45CE' : '#CEC2EB';
    const borderColor = checked ? '#6C45CE' : '#FFFFFF';

    const handleEdit = () => {
        if (isEditing) {
            onEdit(index, editText);
        }
        setIsEditing(!isEditing);
    };

    return (
        <div
            className="toDoTask"
            style={{ backgroundColor, borderColor, transition: 'background-color 0.3s ease' }}
        >
            {checked ? (
                <button
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    onClick={() => setChecked(false)}
                    className="checkedBox"
                >
                    <FaCheck size={60} color="white" />
                </button>
            ) : (
                <button onClick={() => setChecked(true)} className="checkBox"></button>
            )}

            {isEditing ? (
                <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onBlur={() => handleEdit()}
                    autoFocus
                />
            ) : (
                <h4>{text}</h4>
            )}

            <div className="activeButtons">
                <button
                    onClick={() => onDelete(index)}
                    style={{ backgroundColor, transition: 'background-color 0.3s ease' }}
                    className="deleteButton"
                >
                    <MdOutlineDeleteOutline size={45} />
                </button>

                <button
                    onClick={handleEdit}
                    style={{ backgroundColor, transition: 'background-color 0.3s ease' }}
                    className="editButton"
                >
                    <GoPencil size={45} />
                </button>
            </div>
        </div>
    );
};

export default Task;