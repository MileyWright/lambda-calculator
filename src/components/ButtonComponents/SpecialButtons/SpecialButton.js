import React from "react";

export const SpecialButton = (props) => {
  return (
    <button onClick= {(props) => {}}
    className = 'special-button'>
     <p>{ props.special }</p>
    
     {/* Display a button element rendering the data being passed down from the parent container on props */}
   </button>
  );
};
