import './TodoItem.css';
import { BsFillTrashFill } from "react-icons/bs";

function TodoItem({ todo, onComplete, onDelete }) {
    return (
        <li>
            <label className={`control control-checkbox ${todo.completed && "completed"}`}>
                {todo.text}
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={onComplete}
                />
                <div className="control_indicator"></div>
            </label>
            <span
                className='delete'
                onClick={onDelete}><BsFillTrashFill /></span>
        </li>
    );
}

export { TodoItem };