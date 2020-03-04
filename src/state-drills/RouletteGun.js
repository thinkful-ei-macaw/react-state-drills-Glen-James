import React, { Component } from 'react';

class RouletteGun extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chamber: null,
            spinningTheChamber: false
        }
    }

    handleButton = () => {
        this.setState({
            spinningTheChamber: true
        })
    }

    render() {
        let word = '';

        if (this.state.spinningTheChamber) {
            word = 'spinning the chamber and pulling the trigger!';
        }

        return (
            <div>
                <p>{word}</p>
                <button onClick={this.handleButton}>Pull the trigger!</button>
            </div>
        )
    }

}

export default RouletteGun;