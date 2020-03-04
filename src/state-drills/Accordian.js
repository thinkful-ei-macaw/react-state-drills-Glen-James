import React, { Component } from "react";
import renderer from 'react-test-renderer';

class Accordian extends Component {

    constructor(props) {
        super(props)

        this.state = {

            currentSelected: -1
        }
    }

    buttonClick = (index) => {

        this.setState({

            currentSelected: index


        })


    }

    
   
    render() {
        let sections;
        if(!this.props.sections){
             sections = <li></li>          
          
        }else{

          sections = this.props.sections.map((section, index) => {

                if(index === this.state.currentSelected){
                    return (
                        <li key={index}>
                            <button onClick={() => this.buttonClick(-1)}>Click Me</button>
                            <p>{section.title}</p>
                            <p>{section.content}</p>
                        </li>     
                    )
                }
                    return (
                        <li key={index}>
                            <button onClick={() => this.buttonClick(index)}>{section.title}</button>
                        </li>  
                    )
                        
            })


        }

        


        return (
            <div>
            <ul>
               {sections}
            </ul>
            </div>
        );
    }


}


export default Accordian;