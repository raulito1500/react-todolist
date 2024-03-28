import React from "react";
import "./Loading.css"

function Loading() {
    return (
        <li>
            <div className="progress checkbox">
                <div className="inner"></div>
            </div>
            <div className="progress text">
                <div className="inner"></div>
            </div>
            <div className="progress button">
                <div className="inner"></div>
            </div>
        </li>
    );
}

export { Loading };