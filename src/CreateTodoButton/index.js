import React from "react";
import "./CreateTodoButton.css"
import { BsClipboard2Plus } from "react-icons/bs";
import { TodoContext } from "../TodoContext";

function CreateTodoButton() {
    const {
        setOpenModal,
        openModal
    } = React.useContext(TodoContext);
    return (
        <button onClick={(event) => { setOpenModal(!openModal) }} className="btn">
            <BsClipboard2Plus style={{color: "black"}}/>
        </button>
    );
}

export { CreateTodoButton };
