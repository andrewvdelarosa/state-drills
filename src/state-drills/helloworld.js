import React from 'react';
// import { ReactComponent } from '*.svg';

export default class Helloworld extends React.Component {
    state = {
        greeting: "Test"
    }

    render() { 
        return(
            <div>
                <p>Hello {this.state.greeting}</p>
                <button onClick = {() => this.setState({ greeting: "World" }) }>World</button> 
                <button onClick = {() => this.setState({ greeting: "Friend" }) }>Friend</button> 
                <button onClick = {() => this.setState({ greeting: "React" }) }>React</button> 
                </div>
        )}
};

