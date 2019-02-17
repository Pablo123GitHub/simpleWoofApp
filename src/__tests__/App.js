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

    it('axios get gets called two times: age update + click simulation', async () => {
        wrapper.find('button').simulate('click');
        expect(mockAxios.get).toHaveBeenCalledTimes(2);
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

