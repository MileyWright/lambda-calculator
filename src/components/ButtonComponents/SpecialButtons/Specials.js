import React, {useState} from "react";
import {specials} from '../../../data';
import {SpecialButton} from './SpecialButton';
//import any components needed

//Import your array data to from the provided data file

export const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialState, setSpecialState] = useState(specials)
  const specialButtons = specialState.map(special => (
    <SpecialButton special={special}

    key={special}
    />
  ));


  return (
  <div>
      {specialButtons}

      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};
