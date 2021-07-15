import React, { Component } from "react";

class PersonalCard extends Component {
        render() {
            const { firstName, lastName, age, hairColor} = this.props;
            return (
                <div>
                    <h1>{ lastName },{ firstName}</h1>
                    <h4>Age: {age}</h4>
                    <h4>Hair Color: {hairColor}</h4>
                    <hr/>
                </div>
            );
        }
    }

    export default PersonalCard