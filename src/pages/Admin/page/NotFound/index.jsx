import React from 'react';
import { Link } from 'react-router-dom';
import styles from './notfound.module.css';

function NotFound() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.text}>
        Oops!!! Requested couldn't be found.....404
        <span className={styles.spanText}>
          <Link to="/"> --Go to homepage</Link>
        </span>
      </h1>
    </div>
  );
}

export default NotFound;
