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
    return (
      <div className="App ">
        <header className="App-header">
        <h1 className="App-title">Dog Images coming from the <a href='https://documenter.getpostman.com/view/4016432/the-dog-api/RW81vZ4Z'> DOG API</a> </h1>
        </header>
          <div className="flex-container">
              <button id="btn" onClick={this.handleDogObject} className='button-change-image'>Click to see Dogs</button>
              { 
                  this.state.dog.length > 0 ? 
                    this.state.dog.map(dogElement => {
                        return (
                            <div key={dogElement.id} className="dog-image">
                                <img src={dogElement.url}/>
                            </div>
                        )
                    })
                    : ""
              }

          </div>

      </div>
    )
}
}

export default App;
