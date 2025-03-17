const express = require('express');
const cors = require('cors');
const { createHandler } = require('graphql-http/lib/use/http');
const { buildSchema } = require('graphql');
const { ruruHTML } = require('ruru/server');
const commentsArr = require('./comments.json');

const app = express();
app.use(cors());

// 1. Construct GraphQL Schema, Comment:Model/Structure , Query Defines the # APIs to fetch data
let commentSchema = buildSchema(`
    type Query{  
        comments:[Comment]
        comment(id:Int):Comment
    }
    type Comment{
        id:Int
        postId:Int
        name:String
        email:String
        body:String
    }
`);

// root provides resolver/controller function
let root = {
    comments: function () {
        return commentsArr;
    },
    comment: function (args) {
        const commentId = args.id;
        return commentsArr.find(comment => comment.id == commentId);
    }
}

// Define a route for the resource 'comment'
app.all('/api/comments', createHandler({ schema: commentSchema, rootValue: root }));

// for graphQL UI 
app.get('/', (req, res) => {
    res.type('html');
    res.end(ruruHTML({ endpoint: '/api/comments' }))
});

app.listen({ port: 5000 });
console.log('Listening to port 5000');
