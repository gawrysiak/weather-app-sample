import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Weather from 'containers/Weather';
import store from './store';
import './App.css';

class App extends React.Component {
  render(): Node {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Weather} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
