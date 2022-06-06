import React from 'react';
import styles from './modal.module.css';

function Modal({ label, message, handleClick }) {
  const scrollHandler = () => {
    window.addEventListener('scroll', () => {
      const modal = document.querySelector(`.${styles.modalWrapper}`);
      if (window.scrollY > 100) {
        modal.style.backgroundColor = '#002053';
      } else {
        modal.style.backgroundColor = '';
      }
    });
  };

  scrollHandler();
  return (
    <div className={styles.modalWrapper}>
      <h5
        style={{
          color: '#fff',
          textAlign: 'end',
          fontSize: '20px',
          paddingTop: '7px',
          cursor: 'pointer',
        }}
        onClick={handleClick}
      >
        x
      </h5>
      <h3 style={{ textAlign: 'center', color: '#ffcc' }}>{label}</h3>
      <p style={{ color: '#fff' }}>{message}</p>
      <div style={{ position: 'absolute', bottom: 0 }}>
        <h3 style={{ color: '#fff' }}>By: Fredrick</h3>
      </div>
    </div>
  );
}

export default Modal;
