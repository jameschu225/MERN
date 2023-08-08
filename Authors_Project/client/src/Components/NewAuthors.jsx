import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

function NewAuthors(props) {
    const [error, setError] = useState("")
    const { authors } = props;
    const [newAuthorName, setNewAuthorName] = useState("")
    const navigate = useNavigate();

    const AddNewAuthor = (e) => {
        e.preventDefault();

        const newAuthor = {
            Name: newAuthorName
        }

        axios.post("http://127.0.0.1:8000/authors/new", newAuthor)
            .then(res => {
                console.log(authors)
                // setAuthors(...authors, res.data)
                navigate('/authors')
            })
            .catch(err => console.log(err))
    };

    const cancelSubmit = () => {
        navigate('/authors')
    };

    const authorInputHandler = (e) => {
        setNewAuthorName(e.target.value)

        if (e.target.value.length < 3) {
            setError('Note must contain min of 3 characters')
        } else {
            setError("")
        }
    }

    return (
        <div>
            <h1>Favorite authors</h1>
            <Link to={'/authors'}>Home</Link><br />
            <label htmlFor="add a new author">Add a new author:</label>
            <div>
                <p>Name:</p>
                <p style={{ color: "red" }}>{error}</p>
                <input type="text" name="newAuthor" id="newAuthor" value={newAuthorName} onChange={authorInputHandler} />
                <button type="button" onClick={cancelSubmit}>Cancel</button><button type="button" onClick={AddNewAuthor}>Submit</button>
            </div>
        </div>
    )
}

export default NewAuthors