import React, { useReducer } from 'react'
import { useQuery, useMutation } from '@apollo/client';
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries'

const initialState = {
    hasError: false
}

const reducer = (state, action) => {
    console.log('reducing')
    console.log(state)
    console.log(action)
    if (action.type === "loadError") {
        console.log('Handling loaderror')
        return { ...state, hasError: true }
    }
    if (action.type === "hideError") {
        return { ...state, hasError: false }
    }
    return state
}


const AddBook = () => {
    const { loading: authorLoading, data: authorData } = useQuery(getAuthorsQuery);
    const [addBookFn, data] = useMutation(addBookMutation, { refetchQueries: [{ query: getBooksQuery }] })
    const [state, dispatch] = useReducer(reducer, initialState)




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
        if (name && genre && authorId) {
            addBookFn({ "variables": { name, genre, authorId } })
        } else {
            console.log('calling dispatch')
            dispatch({ type: "loadError" })
            setTimeout(() => { dispatch({ type: "hideError" }) }, 2000)
        }
        console.log(data)
    }
    if (authorLoading) return <h1>Loading...</h1>

    return (
        <div>
            <input type="text" name="name" id="name" onChange={handleInput} />
            <select name="genre" onChange={handleInput} >
                <option value="">Select genre</option>
                <option value="Adventure" > Adventure </option>
                < option value="HOrrOr" > Horror </option>
            </select>
            < select name="authorId" onChange={handleInput} >
                <option value="">Select author</option>
                {
                    authorData.authors.map(author => {
                        return <option key={author.id} value={author.id} > {author.name} </option>
                    })
                }
            </select>
            < button className="add-button" onClick={addBook}> +</button>
            {state.hasError && <div id="error-div">Error</div>}
        </div>
    )
}

export default AddBook