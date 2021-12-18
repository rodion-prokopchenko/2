import propTypes from 'prop-types';

import shortid from 'shortid';
import React, { Component } from 'react';
// import Statistics from '../Statisctics/Statistics';
// import FeedbackOptions from '../FeedbackOptions/FeedbackOprtions';
import Notification from '../Notification/Notification';

class Section extends Component {
  state = {
    total: this.props.total,
  };
  stat = 'Statistics';

  checkTotal = () => {
    if (this.props.title === this.stat && this.props.checkTotal()) {
      return true;
    }
    return;
  };

  render() {
    return (
      <>
        <section key={shortid.generate()}>
          {this.props.title && (
            <h2 key={shortid.generate()}>{this.props.title}</h2>
          )}
          {this.checkTotal() ? (
            <Notification message={'There is no feedback'} />
          ) : (
            this.props.children
          )}
        </section>
      </>
    );
  }
}

Section.propTypes = {
  title: propTypes.string,
  children: propTypes.node.isRequired,
};
export default Section;
