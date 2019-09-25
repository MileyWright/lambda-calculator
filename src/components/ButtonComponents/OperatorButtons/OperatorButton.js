import React from "react";

export const OperatorButton = (props) => {
  return (
    <button onClick= {(props) => {}}
    className = 'operator-button'>
     <p>{ props.operator }</p>
    
     {/* Display a button element rendering the data being passed down from the parent container on props */}
   </button>
  );
};
