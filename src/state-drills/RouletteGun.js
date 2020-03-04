import React, { Component } from 'react';

class RouletteGun extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chamber: null,
            spinningTheChamber: false
        }
        this.timeout = null;
    }

    componentWillUnmount() {
        this.stopTimer();
    }

    handleButton = () => {
        this.setState({
            spinningTheChamber: true
        })
        this.startTimer();
    }

    startTimer = () => {

        this.timeout = setTimeout(() => {
            this.setState({
                chamber: Math.ceil(Math.random() * 8),
                spinningTheChamber: false

            })
            console.log('Timeout active')
        }, 2000);

    }

    stopTimer = () => {

        clearTimeout(this.timeout);

    }



    render() {

        console.log(this.state)
        let word = '';

        if (this.state.spinningTheChamber) {
            word = 'spinning the chamber and pulling the trigger!';
        } else if (this.state.chamber === this.props.bulletInChamber) {
            word = 'BANG';
        } else {
            word = 'Your Safe!';
        }

        console.log(this.props.bulletInChamber)

        return (
            <div>
                <p>{word}</p>
                <button onClick={this.handleButton}>Pull the trigger!</button>
            </div>
        )
    }

}

export default RouletteGun;
