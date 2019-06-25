import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';
import { isTSAnyKeyword } from '@babel/types';
    
const store = {
        lists: [],
        allCards: {}
    }
//smoke test
describe('App.js', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App store={store} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});

//snapshot test
it('renders the UI as expected', () => {
    const tree = renderer
    //outside curleys are JSX for sub. -inside are for javascript {} notation {lists:[], allCards:{}}
      .create(<App store={store} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
    });