import React, { Component } from "react";

class PersonalCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            age: this.props.age
        }
    }
    render() {
        return (
            <div>
                <h1>{ this.props.lastName },{ this.props.firstName}</h1>
                <h4>Age: {this.state.age}</h4>
                <h4>Hair Color: {this.props.hairColor}</h4>
                <button onClick={()=> this.setState({age: this.state.age + 1})}>Bithday Button for {this.props.firstName} {this.props.lastName}</button>
                <hr/>
            </div>
        );
    }
    }

    export default PersonalCard