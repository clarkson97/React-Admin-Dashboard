import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './home.module.css';
import Sidebar from '../../components/Sidebar';
import AdminHomePage from '../../components/AdminHome';
import NotFound from '../NotFound';

function Admin() {
  const admin = true;
  return (
    <Router>
      <div className={styles.wrapper}>
        {/* sidebar */}
        {/* <div className={styles.sidebar}> */}
        <Sidebar style={styles.sidebar} />
        {/* </div> */}
        {/* container */}
        <div className={styles.container}>
          <Routes>
            {admin && (
              <Route
                exact
                path="/admin/dashboard"
                element={<AdminHomePage />}
              />
            )}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default Admin;
