import React from "react";
import "./TodoForm.css"
import { TodoContext } from "../TodoContext";

function TodoForm() {
    const {
        setOpenModal,
        addTodo
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }
    return (<form
        onSubmit={(event) => {
            event.preventDefault();
            addTodo(newTodoValue);
            setNewTodoValue('');
            setOpenModal(false);
        }} className="formContainer">
        <label>Insert text for your new TODO</label>
        <textarea
            value={newTodoValue}
            onChange={onChange}
            placeholder="Insert text" />
        <div className="buttoncontainer">
            <button
                onClick={() => setOpenModal(false)}
                type="button"
                className="btn secondary">Cancel</button>
            <button
                type="submit"
                className="btn primary">Create</button>
        </div>
    </form>)
}
export { TodoForm }