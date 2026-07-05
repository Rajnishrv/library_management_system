import { useState } from 'react'
import { useEffect } from 'react'
import { deleteBook, listBooks } from '../services/BooksService';
import { useNavigate } from 'react-router-dom';

const ListBookComponent = () => {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // listBooks().then((response) => {
        //     setBooks((response.data).data);
        // }).catch((error) => {
        //     console.error(error);
        // });
        getAllBooks();
    }, [])

    function addNewBook() {
        navigate('/add-book');
    }
    function getAllBooks() {
        listBooks().then((response) => {
            setBooks((response.data).data);
        }).catch((error) => {
            console.error(error);
        });
    }
        //delete member
        function removeBook(id) {
            if (window.confirm("Are you sure you want to delete this book?")) {
                deleteBook(id).then(response => {
                    console.log(response);
                    alert("Book deleted successfully");
                    navigate("/books");
                    getAllBooks();
                }
                ).catch(error => {
                    console.error(error);
                    alert("An error occurred");
                });
            }
        }

        function updateBook(id) {
            navigate(`/edit-book/${id}`);
        }
    return (
        <div className="container">
            <h2 className='text-center'>All Books</h2>
            <button className='btn btn-primary' onClick={addNewBook}>Add Book</button>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr className='text-center'>
                        <th>Id</th>
                        <th>Book Title</th>
                        <th>Book Genre</th>
                        <th>Author Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map(book =>
                            <tr key={book.id} className='text-center'>
                                <td>{book.id}</td>
                                <td>{book.title}</td>
                                <td>{book.genre}</td>
                                <td>{book.author.name}</td>
                                <td>
                                        <button className='btn btn-info' onClick={() => updateBook(book.id)}>Update</button>
                                        <button className='btn btn-danger' onClick={()=> removeBook(book.id)} style={{marginLeft:'10px'}}>Delete</button>
                                    </td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}
export default ListBookComponent;