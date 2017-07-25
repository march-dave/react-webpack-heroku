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
      firstname: ""
    };
  }

  handleChange(e) {
    
  }

  handleButtonClick(event) {
    console.log(event.target)



  }

  render() {
    return (
      <div>
        First Name <input type='text' placeholder="First Name" name="firstName" value={this.state.firstname} onChange={this.handleChange.bind(this)} />

        {/* <input type="text" name="name" placeholder="name" value={this.state.name}/>
        <input type="text" phone="phone" placeholder="phone" value={this.state.phone}/> */}

        {/* <input type="text" value={this.state.values["four"]} onChange={this.handleChange.bind(this, "four")}/> */}
            
         <button onClick={this.handleButtonClick.bind(this)}>Click Me</button> 
      </div>
    )
  }
}


export default class App extends React.Component {

  constructor() {
      super();

      this.state = {
        header: "This is header",
        "content": "This is content"
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

          {this.state.header}
          {this.state.content}

          <UserInformation />
      </div>
    )
  }
}
