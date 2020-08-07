import React from 'react';
import ReactDOM from 'react-dom';
// import axios from 'axios';
// import DataElements from './components/DataElements.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // data: [],
      // filteredData: []
    }
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.newBalance = this.newBalance.bind(this);
  }

  render() {
    return (
      <h1>i am react code</h1>
    )
  }

}

ReactDOM.render(<App/>, document.getElementById('app'));