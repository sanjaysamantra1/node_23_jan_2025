const express = require('express');
const cors = require('cors');
const { createHandler } = require('graphql-http/lib/use/http');
const { ruruHTML } = require('ruru/server');
const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList, GraphQLSchema } = require('graphql');

const app = express();
app.use(cors());

const employeeArr = [
    { id: 1, name: 'Adarsh', sal: 5000, gender: 'male' },
    { id: 2, name: 'Ajay', sal: 6000, gender: 'male' },
    { id: 3, name: 'Priyanka', sal: 7000, gender: 'female' },
]

// Employee Type Definition (Employee Model)
const EmployeeType = new GraphQLObjectType({
    name: 'Employee',
    fields: {
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        sal: { type: GraphQLInt },
        gender: { type: GraphQLString },
    }
})

// Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        employees: {
            type: new GraphQLList(EmployeeType),
            resolve: () => employeeArr
        },
        employee: {
            type: EmployeeType,
            args: { id: { type: GraphQLInt } },
            resolve: (_, { id }) => employeeArr.find(emp => emp.id == id)
        }
    }
});

// Mutations
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addEmployee: {
            type: EmployeeType,
            args: {
                id: { type: GraphQLInt },
                name: { type: GraphQLString },
                sal: { type: GraphQLInt },
                gender: { type: GraphQLString },
            },
            resolve: (_, { id, name, sal, gender }) => {
                console.log(id, name, sal, gender )
                employeeArr.push({ id, name, sal, gender });
                return { msg: 'Employee Added Successfully', data: { id, name, sal, gender } }
            }
        }
    }
});


// schema
const employeeSchema = new GraphQLSchema({ query: RootQuery, mutation: Mutation });

// Define a route for the resource 'employee'
app.all('/api/employees', createHandler({ schema: employeeSchema }));

// for graphQL UI (RURU UI)
app.get('/', (req, res) => {
    res.type('html');
    res.end(ruruHTML({ endpoint: '/api/employees' }))
});

app.listen({ port: 5000 });
console.log('Listening to port 5000');


/* 
Get all Employees : {employees{id,name,gender}}

Get 1 Employee : {employee(id:2){name,gender}}



*/
