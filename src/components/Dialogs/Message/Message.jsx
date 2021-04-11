import React from 'react';
import PropTypes from 'prop-types';

import styles from './Message.module.css';

const Message = ({ message }) => <div className={styles.message}>{message}</div>;

Message.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Message;
