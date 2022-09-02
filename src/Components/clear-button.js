import '../Stylesheets/clear-button.css';
import React from "react";

const ClearButton = (props) => (
    <div className="clear-button" onClick={props.doClic}>
        {props.children}
    </div>
);

export default ClearButton;