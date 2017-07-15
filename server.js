const path = require('path')
const express = require('express')
const morgan = require('morgan')
const http = require('http')
const bodyParser = require('body-Parser')

module.exports = {
    app: function() {
        const app = express()

        app.use(morgan('dev'))
        app.use(bodyParser.json())
        app.use(bodyParser.urlencoded({ extended: false }))

        const indexPath = path.join(__dirname, 'index.html')
        const publicPath = express.static(path.join(__dirname, 'public'))

        app.use('/public', publicPath)
            // app.use('/', require(./routes/index))
        app.get('/', function(_, res) { res.sendFile(indexPath) })

        return app
    }
}

// var express = require('express');
// var graphqlHttp = require('express-graphql');
// var { buildSchema } = require('graphql');

// var schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `);

// var root = { hello: () => 'hello world!' };

// var app = express();
// app.use('graphql', graphqlHttp({
//     schema: schema,
//     rootValue: root,
//     graphiql: true,
// }));

// app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));


// var express = require('express');
// var bodyParser = require('body-parser');
// var { graphqlExpress, graphiqlExpress } = require('graphql-server-express');
// var { makeExecutableSchema } = require('graphql-tools');

// var typeDefs = [`
// type Query {
//   hello: String
// }

// schema {
//   query: Query
// }`];

// var resolvers = {
//     Query: {
//         hello(root) {
//             return 'world';
//         }
//     }
// };

// var schema = makeExecutableSchema({ typeDefs, resolvers });
// var app = express();
// app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
// app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
// app.listen(4000, () => console.log('Now browse to localhost:4000/graphiql'));


// // require 'graphql'

// // QueryType = GraphQL::ObjectType.define do
// //   name 'Query'
// //   field :hello do
// //     type types.String
// //     resolve -> (obj, args, ctx) { 'Hello world!' }
// //   end
// // end

// // Schema = GraphQL::Schema.define do
// //   query QueryType
// // end

// // puts Schema.execute('{ hello }')

// // import graphene

// // class Query(graphene.ObjectType):
// //   hello = graphene.String()

// //   def resolve_hello(self, args, context, info):
// //     return 'Hello world!'

// // schema = graphene.Schema(query=Query)
// // result = schema.execute('{ hello }')
// // print(result.data['hello'])

// // var { graphql, buildSchema } = require('graphql');

// // var schema = buildSchema(`
// //   type Query {
// //     hello: String
// //   }
// // `);

// // var root = { hello: () => 'Hello world!' };

// // graphql(schema, '{ hello }', root).then((response) => {
// //     console.log(response);
// // });

// var express = require('express');
// var graphqlHTTP = require('express-graphql');
// var { buildSchema } = require('graphql');

// var schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `);

// var root = { hello: () => 'Hello world!' };

// var app = express();
// app.use('/graphql', graphqlHTTP({
//     schema: schema,
//     rootValue: root,
//     graphiql: true,
// }));
// app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));

// var express = require('express');
// var bodyParser = require('body-parser');
// var { graphqlExpress, graphiqlExpress } = require('graphql-server-express');
// var { makeExecutableSchema } = require('graphql-tools');

// var typeDefs = [`
// type Query {
//   hello: String
// }

// schema {
//   query: Query
// }`];

// var resolvers = {
//     Query: {
//         hello(root) {
//             return 'world';
//         }
//     }
// };

// var schema = makeExecutableSchema({ typeDefs, resolvers });
// var app = express();
// app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
// app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
// app.listen(4000, () => console.log('Now browse to localhost:4000/graphiql'));