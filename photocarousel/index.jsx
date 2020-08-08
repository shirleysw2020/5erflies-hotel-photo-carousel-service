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
      <div>i am react code</div>
    )
  }

}

ReactDOM.render(<App/>, document.getElementById('app'));