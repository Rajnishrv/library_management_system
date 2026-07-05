import axios from 'axios';
const REST_API_BASE_URL = 'http://localhost:8081/book/books';
export const listBooks = () =>{
    return axios.get(REST_API_BASE_URL);
}

const REST_API_BASE_URL2 = 'http://localhost:8081/book';
export const createBook = (books) => axios.post(REST_API_BASE_URL2, books);
// to delete book from the database
export const deleteBook = (bookId) => axios.delete(REST_API_BASE_URL2 + '/' + bookId);

export const updateBook = (book) => axios.put(REST_API_BASE_URL,  book);

export const getBookById = (id) => axios.get(REST_API_BASE_URL2+"/"+id);