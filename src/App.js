import React, { Component } from 'react';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import AddLocation from './components/AddLocation';
import LocationsListWithData from './containers/LocationsListWithData';
import store from './store';

import './style/style.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <AddLocation/>
        <LocationsListWithData/>
      </div>
      </Provider>
    );
  }
}

export default App;
