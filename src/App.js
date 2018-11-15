import React from 'react';
import './App.css';
import user from './user.json';
import ListPage from './components/ListPage';

class App extends React.Component {
  state = { 
    user: user
   };
  render() {
    return (
      <ListPage
      user={this.state.user}
      />
    );
  }
}

export default App;
