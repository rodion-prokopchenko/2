import propTypes from 'prop-types';

import shortid from 'shortid';
import React, { Component } from 'react';

class Statistics extends Component {
  render() {
    return (
      <>
        <ul>
          <li key={shortid.generate()}>Good:{this.props.good}</li>
          <li key={shortid.generate()}>Neutral:{this.props.neutral}</li>
          <li key={shortid.generate()}>Bad:{this.props.bad}</li>
          <li key={shortid.generate()}>Total:{this.props.total}</li>
          <li key={shortid.generate()}>
            Positive feedback:{this.props.positivePercentage}
          </li>
        </ul>
      </>
    );
  }
}
export default Statistics;
