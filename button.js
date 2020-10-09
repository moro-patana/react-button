import React from "react"


function Button(props) {
    const className = `button ${props.type}`
   
    return (
    <div className="buttontype">
      <p>{props.title}</p>
      <button className={className}>
        {props.icon && props.icon} {props.label}
      </button>
    </div>
    );
   }
export default Button;