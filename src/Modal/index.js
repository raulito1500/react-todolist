import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
import { BsXCircle } from "react-icons/bs";
import { TodoContext } from "../TodoContext";

function Modal({ children }) {
    const {
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);

    if (openModal) {
        document.getElementById('modal').classList.add("opened");
    } else {
        document.getElementById('modal').classList.remove("opened");
    }
    const closeModal = ()=>{
        setOpenModal(!openModal)
    }
    return ReactDOM.createPortal(
        <div className="modal-content">
            <span onClick={closeModal}>
            <BsXCircle />
            </span>
            {children}
        </div>, document.getElementById('modal')
    )
}
export { Modal }