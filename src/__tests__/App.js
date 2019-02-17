import mockAxios from 'axios'
import ReactDOM from 'react-dom';
import * as Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import { shallow, mount} from 'enzyme';
import React from 'react';
import { create } from 'react-test-renderer';

describe('rendering', ()=> {
    let wrapper;
    beforeEach (()=>{
         wrapper = shallow(<App/>)
    })

    it('axios method "get" gets called once  right from the start', async () => {
        // wrapper.find('button').simulate('click');
        // the axios.get gets called twice because of the page update+ button click
        expect(mockAxios.get).toHaveBeenCalledTimes(1);
     });

    it('axios get gets called three times: first test + page update + click current test', async () => {
        wrapper.find('button').simulate('click');
        // the axios.get gets called twice because of the page update+ button click
        expect(mockAxios.get).toHaveBeenCalledTimes(3);
     });
 

    it('Axios returns a mocked value when axios.get is used', () => {
        mockAxios.get()
            .then(response => {
                expect.assertions(1);
                expect(response.data.url).toEqual('urlwithcooldogs.png')
            })
            .catch(err => console.log('ERROR', err))
    });

    it('componentsDidMount called from the start hence state == coolurl.png', () => {
        const spy = jest.spyOn(App.prototype, 'componentDidMount')
        const mountWrapper = mount(<App/>)
        expect(spy).toHaveBeenCalled();
        expect(wrapper.state('dog')).toEqual({"url": "urlwithcooldogs.png"});
    });

})

