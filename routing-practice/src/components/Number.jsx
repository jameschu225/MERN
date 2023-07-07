import React from 'react'
import { useParams } from "react-router-dom";

const Number = (props) => {
    const {num} = useParams();
    const {txtColor} = useParams();
    const {backColor} = useParams();

    const checkNumber = () => {
        if (isNaN(num)){
          return `The word is: ${num}`;
        } else {
          return `The Number is: ${num}`;
        }
      }
  return (
    <div style={{color:`${txtColor}`, backgroundColor:`${backColor}`}}>{checkNumber()}</div>
  )
}

export default Number