const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./schema/schema')
const cors = require('cors');

const app = new express()

mongoose.connect('mongodb+srv://mongocloud:mongocloud1@graphql-tutorial.zdhwq.mongodb.net/TEST_DATABASE');
mongoose.connection.once('open', () => {
    console.log('connection to mongodb established successfully')
})
mongoose.connection.once('close', () => {
    console.log('connection to mongodb was closed successfully')
})

app.use(cors())
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))


app.listen(4000, () => {
    console.log('express server started on port 4000...')
})