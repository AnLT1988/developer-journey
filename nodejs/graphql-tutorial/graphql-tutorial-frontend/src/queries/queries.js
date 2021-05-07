import { gql } from '@apollo/client'

export const getBooksQuery = gql`
{ 
    books {
        name
        id
        author {
            name
            books {
                name
                genre
                id
            }
        }
    }
}`

export const getAuthorsQuery = gql`
{
    authors{
        id
        name
    }
}`

export const addBookMutation = gql`
mutation addBook($name: String, $genre: String, $authorId: ID){
    addBook(name:$name, genre:$genre, authorId: $authorId){
        name
        id
    }
}
`
