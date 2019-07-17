import React from 'react';
import './App.css';
import Form from './components/Form'
import Playlist from './components/Playlist';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      form : true
    }
  }
  render() {
    return (
      <div className="App">
        {
          this.state.form ? 
          <Form></Form>
          :
          <Playlist></Playlist>
        }
        <button id="button" onClick = {(e) => this.setState({form : !this.state.form})}>Switch</button>
      </div>
    );
  }
}

export default App;
