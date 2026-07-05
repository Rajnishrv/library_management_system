import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createBook } from "../services/BooksService";

const AddBookComponent = () => {
    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");
    const [authorId, setAuthorId] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const bookData = {
            title,
            genre,
            author: { id: Number(authorId) }, 
        };

        createBook(bookData)
            .then(response => {
                console.log(response);
                alert("Book added successfully");
                navigate("/books");
            })
            .catch(error => {
                console.error(error);
                alert("An error occurred");
            });
    };

    return (
        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">Add Book</h3>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Title:</label>
                                <input 
                                    type="text"
                                    placeholder="Title"
                                    name="title"
                                    className="form-control"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Genre:</label>
                                <input 
                                    type="text"
                                    placeholder="Genre"
                                    name="genre"
                                    className="form-control"
                                    value={genre}
                                    onChange={(e) => setGenre(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Author Id:</label>
                                <input 
                                    type="number"
                                    placeholder="Author Id"
                                    name="authorId"
                                    className="form-control"
                                    value={authorId}
                                    onChange={(e) => setAuthorId(e.target.value)}
                                />
                            </div>
                            <button type="submit" className="btn btn-success">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBookComponent;