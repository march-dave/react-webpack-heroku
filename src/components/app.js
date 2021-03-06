import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header'
import Home from '../containers/Home'
import Login from '../containers/Login'

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
        return ( <
            div >
            First Name < input type = 'text'
            placeholder = "First Name"
            name = "firstName"
            value = { this.state.firstname }
            onChange = { this.handleInput.bind(this) }
            /> 

            Last Name < input type = 'text'
            placeholder = "Last Name"
            name = "lastname"
            value = { this.state.lastname }
            onChange = { this.handleLastName.bind(this) }
            />

            <
            button onClick = { this.handleButtonClick.bind(this) } > Click Me < /button>  < /
            div >
        )
    }
}

class Content extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "Dave"
        }
    }

    render() {
        return ( <
            div > Content Page { this.props.aaaaaaa } < /div>
        )
    }
}

class InputRange extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return ( <
            div > < /div>
        )
    }
}

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return ( <
            div > Test < /div>
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
    }

    render() {
        var myStyle = {
            fontSize: 100,
            color: '#00FF00'
        }

        // var i = 1;
        return ( <
            Router >
            <
            div >

            <
            Content aaaaaaa = "I am props" / >
            <
            InputRange / >
            <
            Switch >
            <
            Route exact path = "/"
            component = { Header }
            /> <
            Route path = "/Home"
            component = { Home }
            /> <
            Route path = "/Login"
            component = { Login }
            /> < /
            Switch >

            <
            /div> < /
            Router >
        )
    }
}