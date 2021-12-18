import react from 'react';
import propTypes from 'prop-types';

export default function Notification({ message }) {
  return <span>{message}</span>;
}

Notification.propTypes = {
  message: propTypes.string.isRequired,
};
