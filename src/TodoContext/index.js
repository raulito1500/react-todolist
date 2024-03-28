import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
    const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', []);

    const [searchValue, setSearchValue] = React.useState("");
    const [openModal, setOpenModal] = React.useState(false);

    const completedTodos = todos.filter(todo => !!todo.completed).length; // Saber que estamos trabajando con booleanos. Es una mejor sintaxis
    const totalTodos = todos.length;

    const filteredTodos = todos.filter(todo => !!todo.text.toLowerCase().includes(searchValue.toLowerCase()));

    const completeTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        saveTodos(newTodos)
    }
    const addTodo = (text) => {
        const newTodos = [...todos];
        let todo = { text: text, completed: false };
        newTodos.unshift(todo);
        saveTodos(newTodos);
    }
    const deleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        saveTodos(newTodos)
    }
    return (
        <TodoContext.Provider value={{
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            filteredTodos,
            completeTodo,
            deleteTodo,
            addTodo,
            loading,
            error,
            openModal,
            setOpenModal
        }}>
            {children}
        </TodoContext.Provider>
    );
}
function TodoConsumer() {
    return (
        <TodoContext.Consumer></TodoContext.Consumer>
    );
}
export { TodoContext, TodoProvider, TodoConsumer }