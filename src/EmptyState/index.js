import React from "react";
import "./EmptyState.css"
import { BsClipboard2Plus } from "react-icons/bs";

function EmptyState() {
    return (
       <li>
        Click on <BsClipboard2Plus style={{color: "black"}}/> to create your first task
       </li> 
    );
}

export { EmptyState };