import React from 'react';
import QuoteCard from './components/QuoteCard';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simpson: {}
    }

    this.getQuote = this.getQuote.bind(this);
  }

  getQuote() {
    axios.get('https://quests.wilders.dev/simpsons-quotes/quotes')
      .then(response => {
        this.setState({
          simpson: response.data[0]
        });
      });
  }

  render() {
    return (
      <>
        <button onClick={this.getQuote}>Get quote</button>
        <QuoteCard item={this.state.simpson}/>
      </>
    );
  }
}

export default App;
