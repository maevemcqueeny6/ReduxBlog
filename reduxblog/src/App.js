import React, { Component } from 'react'
import './App.css';
import { Provider } from 'react-redux';


import Posts from './components/Posts';
import PostForm from './components/PostForm';
import store from './store'

// const store = createStore(() => [], {}, applyMiddleware());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <h1>React Redux App</h1>
        <PostForm/>
        <Posts />
      </div>
      </Provider>
    )
  }
}

export default App;
