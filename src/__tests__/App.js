import mockAxios from 'axios'
import ReactDOM from 'react-dom';
import * as Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import { shallow} from 'enzyme';
import React from 'react';
import sinon from 'sinon';

describe('rendering', ()=> {



    it('componentDidMount is called once', async () => {

       let wrapper = shallow(<App/>)
        wrapper.update()
        expect(mockAxios.get).toHaveBeenCalledTimes(1);

    });

    it('componentDidMount to return value ', () => {

        let wrapper = shallow(<App/>)
        wrapper.update()

        mockAxios.get()
            .then(response => {
                expect.assertions(1);
                expect(response.data.url).toEqual('urlwithcooldogs.png')
            })
            .catch(err => console.log('ERROR', err))
    });

})





