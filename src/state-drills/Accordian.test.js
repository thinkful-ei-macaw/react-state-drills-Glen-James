import renderer from 'react-test-renderer';
import React from 'react';
import ReactDOM from 'react-dom';
import Accordian from './Accordian';


//SMOKSCREEN TEST

it('renders with no crash', () => {

    const div = document.createElement('div');
    ReactDOM.render(<Accordian sections={[{title: 'title', content: 'content' }]}/>, div);
    ReactDOM.unmountComponentAtNode(div);


})

//SNAPSHOT TEST

it('renders the UI as expected', () => {
    const tree = renderer
        .create(<Accordian sections={[{title: 'title', content: 'content' }]} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

//SNAPSHOT TEST EMPTY LI

it('renders the UI as expected', () => {
    const tree = renderer
        .create(<Accordian />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

