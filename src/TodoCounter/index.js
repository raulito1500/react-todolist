import React from "react";
import "./TodoCounter.css";
import { TodoContext } from '../TodoContext'

// function TodoCounter({ total, completed}) { // En este caso está nombrando las variables con las que va a trabajar pero podría traer el props completo
function TodoCounter() {
    const {
        completedTodos: completed,
        totalTodos: total
    } = React.useContext(TodoContext);
    return (
        completed !== total ?
            <h1>
                You have completed <span style={{ fontWeight: "bold" }}>{completed}</span> out of <span style={{ fontWeight: "bold" }}>{total}</span> TODO's
            </h1> : <h1>
                Congrats! You have completed <span style={{ fontWeight: "bold" }}>all</span> your TODO's
            </h1>
    );
}

export { TodoCounter };