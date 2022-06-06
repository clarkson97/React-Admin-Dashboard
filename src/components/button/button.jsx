import React from 'react';

export const Button = ({ openModal, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      style={
        !openModal
          ? {
              cursor: 'pointer',
              border: 'none',
              padding: '10px 20px',
              backgroundColor: '#002053',
              color: '#fff',
              fontWeight: '600',
            }
          : {
              display: 'none',
              // cursor: 'wait',
              // border: 'none',
              // padding: '10px 20px',
              // backgroundColor: '#ccc',
              // color: '#fff',
              // fontWeight: '600',
            }
      }
      disabled={openModal}
    >
      Open Modal
    </button>
  );
};
