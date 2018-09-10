import React, { Component } from 'react';
import axios from 'axios';

import './App.css';



class App extends Component {
    state = {
        dog : []
    }

    componentDidMount() {
        axios.get('https://api.thedogapi.com/v1/images/search')
            .then(response => {
                this.setState({
                    dog: response.data
                })
            })
            .catch(err => console.log('MISTAKE', err))
    }


    handleDogObject = () => {
        axios.get('https://api.thedogapi.com/v1/images/search')
            .then(response => {
                this.setState({
                    dog: response.data
                })
            })
            .catch(err => console.log('MISTAKE', err))
    }


  render() {
      const { dog } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Dog Images through the dog api </h1>

        </header>
          <div>
              <button id="btn" onClick={this.handleDogObject} className='button-change-image'>Click to see Dogs</button>
              {
                    dog.map(dogElement => {
                      return (
                          <div key={dogElement.id}>
                              <img src={dogElement.url}/>
                          </div>
                      )
                  })
              }
          </div>

      </div>
    )
}
}

export default App;
