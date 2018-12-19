import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import routes from './routes';
import { Provider } from 'react-redux';
import store from './ducks/store';
import Nav from './Components/Nav/Nav';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className='App'>
            {/* <Nav /> */}
            {routes}
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
