import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';
import { isTSAnyKeyword, tsPropertySignature } from '@babel/types';

// const store = {
//     lists: [],
//     allCards: {}
// }


//smoke test
describe('Card.js', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card className='Card'/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});

//snapshot test
it('renders the UI as expected', () => {
    const tree = renderer
    //outside curleys are JSX for sub. -inside are for javascript {} notation {lists:[], allCards:{}}
      .create(<Card title={Card.title} content={Card.content}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
    });