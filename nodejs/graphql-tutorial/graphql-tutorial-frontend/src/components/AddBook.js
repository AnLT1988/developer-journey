import React from 'react'
import { useQuery, useMutation } from '@apollo/client';
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries'

const AddBook = () => {
    const { loading: authorLoading, data: authorData } = useQuery(getAuthorsQuery);
    const [addBookFn, data] = useMutation(addBookMutation, { refetchQueries: [{ query: getBooksQuery }] })

    let bookData = {
        name: "",
        authorId: "",
        genre: ""
    }

    const [book, setBook] = React.useState(bookData);
    const handleInput = (e) => {
        e.preventDefault()
        setBook({ ...book, [e.target.name]: e.target.value })
    }

    const addBook = () => {
        console.log(book)
        const { name, genre, authorId } = book
        addBookFn({ "variables": { name, genre, authorId } })
        console.log(data)
    }
    if (authorLoading) return <h1>Loading...</h1>

    return (
        <div>
            <input type="text" name="name" id="name" onChange={handleInput} />
            <select name="genre" onChange={handleInput} >
                <option value="Adventure" > Adventure </option>
                < option value="HOrrOr" > Horror </option>
            </select>
            < select name="authorId" onChange={handleInput} >
                {
                    authorData.authors.map(author => {
                        return <option key={author.id} value={author.id} > {author.name} </option>
                    })
                }
            </select>
            < button type="commit" className="add-button" onClick={addBook}> +</button>
        </div>
    )
}

export default AddBook