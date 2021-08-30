import '../App/App.css';
import React, { Component } from 'react';
import shortid from 'shortid';
import Section from '../Section';
import FeedbackOptions from '../FeedbackOptions';
import Statistics from '../Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleDecrement = e => {
    console.dir(e.target.name);
    const target = e.target.name;
    if (typeof target == 'undefined') {
      console.dir(target);
      return;
    }
    this.setState(() => ({
      [e.target.name]: this.state[e.target.name] + 1,
    }));
  };

  totalCount = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    // console.log(this.state.good);
    return total;
  };

  positivePercentage = () => {
    // console.log(this.totalCount());
    if (this.totalCount() > 0) {
      const positivPerc = Math.floor((this.state.good * 100) / this.totalCount());
      // console.log(positivPerc);
      return positivPerc;
    }
    // or to the string - so, we can do whith out isNaN
    // const positivPerc = `${Math.floor((this.state.good * 100) / this.totalCount())}`;
    // console.log(positivPerc.length);
    return 0;
  };

  render() {
    return (
      <div key={shortid.generate()} className="container">
        <Section title={'Please leave feedback'}>
          <FeedbackOptions options={this.state} onLeaveFeedback={this.handleDecrement} />
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.totalCount()}
            positivePercentage={this.positivePercentage()}
          />
        </Section>
      </div>
    );
  }
}

export default App;
