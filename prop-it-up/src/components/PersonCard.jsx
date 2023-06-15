import React from 'react';
import { useState } from 'react';

const PersonCard = (props) => {
    const { firstName, lastName, age, hairColor } = props;
    const [personAge, setPersonage] = useState (age);
    const handleClick = () => {
        setPersonage( personAge + 1);
    }
        return (
        <div>
            <h2>{lastName}, {firstName}</h2>
            <p>Age: {personAge}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={handleClick}> Birthday Button for {firstName} {lastName} </button>
        </div>
    );
}
export default PersonCard;