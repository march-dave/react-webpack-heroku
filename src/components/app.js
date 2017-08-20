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

class UserInformation extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        userinfo: "User Info Header",
        firstname: "",
        lastname: ""
      };
      
  }
  
  handleInput(e) {
    this.setState({
      firstname: e.target.value
    })
    console.log('firstname', this.state.firstname);
    console.log('User Info Header', this.state.userinfo);
  }

  handleLastName(e) {
    this.setState({
      lastname: e.target.value
    })
    console.log('lastname', this.state.lastName);
  }

  handleButtonClick(event) {
    console.log(this.state.firstname);
    console.log(this.state.lastname);

    // var arr = [1, 2, 3, 5, 4];
    // arr.sort();

  }

  render() {
    return (
      <div>
         First Name <input type='text' placeholder="First Name" name="firstName" value={this.state.firstname} onChange={this.handleInput.bind(this)} /> 

        Last Name <input type='text' placeholder="Last Name" name="lastname" value={this.state.lastname} onChange={this.handleLastName.bind(this)} />

         <button onClick={this.handleButtonClick.bind(this)}>Click Me</button> 
      </div>
    )
  }
}

export default class App extends React.Component {

  constructor(props) {
      super(props);

      this.state = {
        header: "This is header",
        "content": "This is content",
        age: ""
      }
  }

  onHandleAge(e) {
    this.setState({
      age: e.target.value
    }) 

    console.log('age', e.target.value);
    console.log('age: ', this.state.age);
    console.log('age: ', this.state.firstname);
    console.log('age: ', this.state.lastname);

  }

  render () {
    var myStyle = {
      fontSize: 100,
      color: '#00FF00'
    }

    // var i = 1;
    return (
      <div>
          <Header />
          <Content />
          <h1 style={myStyle}>Header</h1>
          <h2>Content</h2>
          <p>This is the content!!</p>
          <h1>{1+1}</h1>

          <h1>{ i == 1 ? 'True': 'False'}</h1>

          {/* {this.state.header}
          {this.state.content} */}

          <UserInformation />

          <input type='text' placeholder='age' onChange={this.onHandleAge.bind(this)} name='age' value={this.state.age}  /> 

          <h1>Props: {this.props.askageProp}</h1>

      </div>
    )
  }
}

function select(state) {
  return {
    visibleTods: state.todos
  }
}