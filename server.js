const path = require('path');
const express = require('express');
const graphqlHTTP = require('express-graphql');

const { graphql, buildSchema } = require('graphql');

let schema = buildSchema(

    type Query {
        hello: String
    }
);

var root = { hello: () => 'Hello World!' };
graph(schema, '{Hello}', root).then((response) => {
    console.log(response);
});

const app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));

var schema = makeExecutableSchema({ typeDefs, resolvers });
var app = express();
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphiql'));

module.exports = {
    app: function() {
        const app = express()
        const indexPath = path.join(__dirname, 'index.html')
        const publicPath = express.static(path.join(__dirname, 'public'))

        app.use('/public', publicPath)
        app.get('/', function(_, res) { res.sendFile(indexPath) })

        return app
    }
}


var express = require('express');
var graphqlHTTP = require('express-graphql');


var { graphql, buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

var root = { hello: () => 'Hello world!' };

graphql(schema, '{ hello }', root).then((response) => {
    console.log(response);
});

var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

var root = { hello: () => 'Hello world!' };

var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));

var schema = makeExecutableSchema({ typeDefs, resolvers });
var app = express();
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphiql'));