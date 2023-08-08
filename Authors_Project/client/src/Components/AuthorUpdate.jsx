import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from "axios";

function AuthorUpdate(props) {
    const { id } = useParams();
    const [editAuthorName, seteditAuthorName] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState("")

    useEffect(() => {

        axios.get(`http://127.0.0.1:8000/authors/${id}`)
            .then(res => {
                seteditAuthorName(res.data.Name)
                // console.log(res.data)
            })
    }, []);

    const editNewAuthor = (e) => {
        e.preventDefault();

        axios.put(`http://127.0.0.1:8000/authors/${id}/edit`, {
            Name: editAuthorName
        })
            .then(res => {
                navigate('/authors');
                // console.log(res.data)
            })
            .catch(err => { console.log(err) })
    };

    const cancelSubmit = () => {
        navigate('/authors')
    };

    const authorInputHandler = (e)=>{
        seteditAuthorName(e.target.value)

        if (e.target.value.length < 3){
            setError ('Note must contain min of 3 characters')
        } else {
            setError("")
        }

    }


    return (
        <div>
            <h1>Favorite authors</h1>
            <Link to={'/authors'}>Home</Link><br />
            <label htmlFor="add a new author">Edit this author:</label>
            <div>
                <p>Name:</p>
                <p style={{color: "red" }}>{error}</p>
                <input type="text" name="newAuthor" id="newAuthor" value={editAuthorName} onChange={authorInputHandler} />
                <button type="button" onClick={cancelSubmit}>Cancel</button><button type="button" onClick={editNewAuthor}>Submit</button>
            </div>
        </div>
    )
}

export default AuthorUpdate