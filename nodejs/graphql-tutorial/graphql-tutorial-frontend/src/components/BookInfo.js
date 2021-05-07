import { useQuery } from '@apollo/client'
import * as _ from 'lodash'
import { getBooksQuery } from 'queries'
import React, { Fragment } from 'react'

const BookInfo = ({ selectedBookId }) => {
    const { loading, data } = useQuery(getBooksQuery)
    if (loading) { return <h1>Loading...</h1> }

    const loadBookDetail = (selectedBookId) => {
        return (
            <Fragment>
                <h1>Author name: {author.name}</h1>
                <ul>Books:
                {author.books.map((book) => {
                    return (
                        <li key={book.id}>{book.name}<br />
                            {book.genre}</li>
                    )
                })}
                </ul>
            </Fragment>
        )
    }

    const selectedBook = _.find(data.books, { id: selectedBookId })
    const { author = { books: [], name: '' } } = selectedBook || {}
    return (
        <div>
            {loadBookDetail()}
        </div>
    )
}

export default BookInfo
