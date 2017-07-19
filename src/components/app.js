import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <div>Header</div>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
      <div>Content</div>
    )
  }
}



class TableRow extends React.Component {
  render() {
    return (
      <tr>
        <td></td>
        <td></td>
      </tr>
    )
  }

}

export default class App extends React.Component {

  constructor() {
      super();
      this.state = {
        data: [
          {
              "id": 1,
              "name": "ddave",
              "age": "18"
          },
          {
             "id": 2,
              "name": "Bar",
              "age": "23" 
          },
             {
             "id": 3,
              "name": "Jam",
              "age": "17" 
          }

        ]
      }
  }

  render () {

    var myStyle = {
      fontSize: 100,
      color: '#00FF00'
    }

    var i = 1;
    return (
      <div>
          <Header />
          <Content />
          <h1 style={myStyle}>Header</h1>
          <h2>Content</h2>
          {/* <p>This is the content!!</p>
          <h1>{1+1}</h1> */}

          <h1>{ i == 1 ? 'True': 'False'}</h1>
      </div>
    )
  }
}
