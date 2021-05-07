import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { getBooksQuery } from '../queries';
import BookInfo from './BookInfo';

const BookList = () => {
    const { loading, err, data } = useQuery(getBooksQuery)
    const [selectedBookId, setSelectedBookId] = useState('')

    const handleClick = (e) => {
        e.preventDefault()
        console.log('Click on ' + e.target.getAttribute('value'))
        console.log(e)
        setSelectedBookId(e.target.getAttribute('value'))
    }
    if (err) return <h1>Error...</h1>

    if (loading) return <h1>Loading...</h1>
    return (

        <div>
            <ul id="book-list">
                {data.books.map((book) => { return <li key={book.id} value={book.id} onClick={handleClick}>{book.name}</li> })}
            </ul>
            <BookInfo selectedBookId={selectedBookId} />
        </div>

    )
}


export default BookList