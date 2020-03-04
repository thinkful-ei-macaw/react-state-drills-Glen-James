import React, { Component } from 'react';


class Bomb extends Component {

    constructor(props) {
        super(props)
        this.state = {

            count: 0,
            datetime: new Date(),
            word: ''


        }

    }

    componentDidMount() {

        this.interval = setInterval(() => {
            console.log('tick');
            this.setState({
                datetime: new Date(),
                count: this.state.count + 1
            })

        }, 1000)


    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        let word = '';

        if (this.state.count % 2) {
            word = 'TICK';
        } if (!(this.state.count % 2)) {
            word = 'TOCK';
        } if (this.state.count >= 8) {
            word = 'BOOM';
        }

        return (

            <div>
                <p>{this.state.datetime.toLocaleString()}</p>
                <p>{this.state.count}</p>
                <p>{word}</p>
            </div>




        )
    }



}

export default Bomb