const graphql = require('graphql')
const _ = require('lodash')

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLSchema,
    GraphQLList
} = graphql;

const books = [
    { name: 'Call of the wild', authorId: '1', id: '1', genre: 'Adventure' },
    { name: 'Call of the dump', authorId: '2', id: '2', genre: 'Adventure' },
    { name: 'Call of the poor', authorId: '1', id: '3', genre: 'Adventure' },
]

const authors = [
    { name: 'Robin', id: '1' },
    { name: 'Robin Cruiso', id: '2' }
]

const BookType = new GraphQLObjectType({
    name: 'BookType',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        author: {
            type: AuthorType,
            resolve(parent, args) {
                return _.find(authors, { id: parent.authorId })
            }
        }
    })
})

const AuthorType = new GraphQLObjectType({
    name: 'AuthorType',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        books: {
            type: GraphQLList(BookType),
            resolve(parent, agrs) {
                return _.filter(books, { authorId: parent.id })
            }
        }
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        books: { //the actual keyword to use in client query, i.e. books(args){list of fields}
            type: BookType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                console.log('resolving request')

                let book = books.find((book) => book.id == args.id)

                return book
            }
        },
        authors: {
            type: AuthorType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return _.find(authors, { id: args.id })
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
});