import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import styles from './DialogItem.module.css';

const DialogItem = (
  { name, id },
) => (
  <div className={styles.dialog}>
    <NavLink to={`/dialogs/${id}`} activeClassName={styles.active}>
      {name}
    </NavLink>
  </div>
);

DialogItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default DialogItem;
