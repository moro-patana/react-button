 import React from "react"


  function Button(props) {
      const className = `button ${props.variant}`
   
      return (
      <div className="buttontype">
        <p>{props.title}</p>
        <button className={className}>
          {props.icon && props.icon} {props.label} {props.disabled}
        </button>
      </div>
     );
    }
 export default Button;

