import React from "react";

export const NumberButton = (props) => {
  return (
    <button onClick= {(props) => {}}
     className = 'number-button'>
      <p>{ props.number }</p>
     
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};
