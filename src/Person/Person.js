import React from 'react';
import './person.css'
 export const Person = (props) => {
    return (
        <div className="firstdef">
        <h1 onClick={props.click}> reaper:{props.name}</h1>
        <h2>age:{props.age}</h2>
        <p>{props.children }  </p>
        <input type='text' onChange={props.changed}/>
    </div>
   
    );
}
export default Person;
