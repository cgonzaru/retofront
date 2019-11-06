import React from 'react';
import './App.css';
import {fetchLocation} from './services/fetchLocation';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      api: []
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  getLocation() {
    fetchLocation()
    .then(data => {
        /* this.setState({
          api: data
        }) */
      })
  }

  render() {
    return (
      <div className="app">
        <header className="app__header">
          <h1 className="header__title">Reto front-end</h1>
        </header>

        <main className="app__main">

        </main>

        <footer className="app__footer">
          Cristina González Rubio &copy; 2019
        </footer>
      </div>
    );
  }
}

export default App;
