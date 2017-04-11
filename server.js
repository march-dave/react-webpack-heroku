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

var express = require('express');
var bodyParser = require('body-parser');
var { graphqlExpress, graphiqlExpress } = require('graphql-server-express');
var { makeExecutableSchema } = require('graphql-tools');

var typeDefs = [`
type Query {
  hello: String
}

schema {
  query: Query
}`];

var resolvers = {
    Query: {
        hello(root) {
            return 'world';
        }
    }
};

var schema = makeExecutableSchema({ typeDefs, resolvers });
var app = express();
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphiql'));

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

const FeedWithData = graphql(gql `{
  feed (type: TOP, limit: 10) {
    repository {
      name, owner { login }
      
      # Uncomment the line below to get stars!
      # stargazers_count
    }

    postedBy { login }
  }
}`, {
    options: {
        notifyOnNetworkStatusChange: true
    }
})(Feed);


/*export default class App {
  createClient() {
    // Initialize Apollo Client with URL to our server
    return new ApolloClient({
      networkInterface: createNetworkInterface({
        uri: 'http://api.githunt.com/graphql',
      }),
    });
  }

  render() {
    return (
      // Feed the client instance into your React component tree
      <ApolloProvider client={this.createClient()}>
        <FeedWithData />
      </ApolloProvider>
    );
  }
}*/

function FeedList({ data }) {
  if (data.networkStatus === 1) {
    return <ActivityIndicator style={styles.loading} />;
  }
  
  if (data.error) {
    return <Text>Error! {data.error.message}</Text>;
  }
  
  return (
    <List containerStyle={styles.list}>
      { data.feed.map((item) => {
          const badge = item.repository.stargazers_count && {
            value: `☆ ${item.repository.stargazers_count}`,
            badgeContainerStyle: { right: 10, backgroundColor: '#56579B' },
            badgeTextStyle: { fontSize: 12 },
          };
              
        
          return <ListItem
            hideChevron
            title={`${item.repository.owner.login}/${item.repository.name}`}
            subtitle={`Posted by ${item.postedBy.login}`}
            badge={badge}
          />;
        }
      ) }
    </List>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    margin: 20,
    marginBottom: 0
  },
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  learnMore: {
    margin: 20,
    marginTop: 0
  },
  loading: {
    margin: 50
  },
  list: {
    marginBottom: 20
  },
  fullApp: {
    marginBottom: 20,
    textAlign: 'center'
  }
});

export default class App {
  createClient() {
    // Initialize Apollo Client with URL to our server
    return new ApolloClient({
      networkInterface: createNetworkInterface({
        uri: 'http://api.githunt.com/graphql',
      }),
    });
  }

  render() {
    return (
      // Feed the client instance into your React component tree
      <ApolloProvider client={this.createClient()}>
        <FeedWithData />
      </ApolloProvider>
    );
  }
}
