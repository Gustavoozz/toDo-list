import './Task.css'
import { MdOutlineDeleteOutline } from "react-icons/md";
import { GoPencil } from "react-icons/go";

const Task = ({ text }) => {
    return (
        <div className="toDoTask">
            <button className='checkBox'>
            <></>
            </button>

            <h4>tarefas</h4>

            <div className="activeButtons">
            <button className="deleteButton">
            <MdOutlineDeleteOutline />
            </button>

            <button className="editButton">
            <GoPencil />
            </button>
            </div>
        </div>
    );
};

export default Task;