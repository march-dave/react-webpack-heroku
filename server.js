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