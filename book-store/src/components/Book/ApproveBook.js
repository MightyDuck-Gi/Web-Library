import React, { useEffect, useState } from 'react'
import axios from 'axios';
import GetBooks from './GetBooks'

const URL = "http://localhost:5000/approve";

const fetchHandler = () => {
  return axios.get(URL).then((res) => res.data);
};

const ApproveBook = () => {
  const [books, setBooks] = useState();
  useEffect(() => {
    fetchHandler().then(data => setBooks(data.books));
  }, []);

    return (
      <div>
        <ul>
          {books && books.map((book, i) => (
            <li key={i}>
              <GetBooks book={book} />
            </li>
          ))}
        </ul>
      </div>
    );
}

export default ApproveBook;