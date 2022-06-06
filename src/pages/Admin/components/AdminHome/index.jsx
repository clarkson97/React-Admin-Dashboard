import React, { useState } from 'react';
import Widgets from '../widget';
import styles from './adminhome.module.css';
import Chart from 'react-apexcharts';
import { charts } from '../../model/chart';

function AdminHomePage() {
  const [chart, setChart] = useState(charts);

  return (
    <div className={styles.wrapper}>
      {/* widget */}
      <div className={styles.widget}>
        <Widgets />
      </div>
      {/* content */}
      <div className={styles.content}>
        <Chart
          options={chart.options}
          series={chart.series}
          type="bar"
          width="500"
        />
        <Chart
          options={chart.options}
          series={chart.series}
          type="area"
          width="500"
        />
        <Chart
          options={chart.options}
          series={chart.series}
          type="line"
          width="500"
        />
      </div>
    </div>
  );
}

export default AdminHomePage;
