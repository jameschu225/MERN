import React, { useEffect } from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

function AuthorsDisplay(props) {

    const navigate = useNavigate();
    const {authors, setAuthors} = props;

    useEffect(() => {

        axios.get("http://127.0.0.1:8000/authors")
            .then(res => {
                setAuthors(res.data);
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }, []);

    const deletHandler = (ID) => { 

        axios.delete(`http://127.0.0.1:8000/authors/delete/${ID}`)
        .then (res => {setAuthors(authors.filter(authors => authors._id !== ID))})
        .catch (err => console.log(err))
    }

    const editHandler = (ID) => {
        navigate(`/authors/${ID}/edit`)
    }

    return (
        <div>
            <h1>Favorite authors</h1>
            <Link to={'/authors/new'}>Add an author</Link><br />
            <label htmlFor="authors">We have quotes by:</label>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authors.map((author) => {
                            return (
                                <tr key={author._id}>
                                    <th>{author.Name}</th>
                                    <th><button type="button" onClick={() => { editHandler(author._id) }}>Edit</button>
                                        <button type="button" onClick={() => { deletHandler(author._id) }}>Delete</button></th>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}

export default AuthorsDisplay