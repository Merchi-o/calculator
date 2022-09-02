/*import '../Stylesheets/buttonNew.css';*/
import '../Stylesheets/button.css';
import React from "react";

function Button(props) {

    const isAnOperator = value => {
        return isNaN(value) && (value !== '.') && (value !== '=');
    };

    return (
        <div
          className={` button-container ${isAnOperator(props.children) ? 'operator' : null}`} 
            onClick={() => props.doClic(props.children)}>
            {props.children}
        </div>
    );
}

export default Button;