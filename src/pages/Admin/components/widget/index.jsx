import React from 'react';
import styles from './widget.module.css';
import { widgets } from '../../model/widget';

function Widgets() {
  return (
    <div className={styles.wrapper}>
      {widgets.map((widget) => (
        <div key={widget.id} className={styles.widgetCard}>
          <h4 className={styles.widgetTitle}>{widget.title}</h4>
          <p className={styles.widgetDesc}>{widget.description}</p>
          <p className={styles.widgetPrice}>${widget.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Widgets;
