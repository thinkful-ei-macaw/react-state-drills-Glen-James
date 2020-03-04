import React, { Component } from 'react';


class HelloWorld extends Component {

    state = {

        who: '',

    };




    handleWorld = () => {

        this.setState(
            {
                who: 'World'
            }


        )

    }

    handleFriend = () => {

        this.setState(
            {
                who: 'Friend'
            }


        )

    }

    handleReact = () => {

        this.setState(
            {
                who: 'React'
            }


        )

    }

    render() {

        return (

            <div>
                <p>Hello {this.state.who}</p>
                <button onClick={this.handleWorld}>World</button>
                <button onClick={this.handleFriend}>Friend</button>
                <button onClick={this.handleReact}>React</button>
            </div>


        );



    }

}

export default HelloWorld;
