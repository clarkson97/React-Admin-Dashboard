import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
// import styles from './sidebar.module.css';
import './sidebar.css';

function Sidebar({ style }) {
  const [isActive, setIsActive] = useState(false);
  const [index, setIndex] = useState(null);
  const [shrink, setShrink] = useState(false);
  const location = useLocation();
  const [link, setLink] = useState([
    {
      id: 1,
      name: 'Dashboard',
      to: '/admin/dashboard',
    },
    {
      id: 2,
      name: 'People',
      to: '/admin/people',
    },
  ]);

  const clickHandler = (i) => {
    if (index === i) {
      setIndex(null);
      setIsActive(!isActive);
    }
    setIndex(i);
  };

  const shrinkHandler = () => {
    setShrink(!shrink);
    // alert(shrink);
  };

  return (
    <div className={shrink ? 'wrapper shrink' : style}>
      <div className="logo">
        Logo
        <span className="svgbar">
          <BsFillArrowLeftSquareFill onClick={shrinkHandler} />
        </span>
      </div>
      <ul className="linkWrapper">
        {link.map((item, i) => (
          <li
            key={item.id}
            onClick={() => clickHandler(i)}
            className={
              location.pathname === item.to || index === i
                ? 'linkList active'
                : 'linkList'
            }
          >
            <Link to={item.to} className="link">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
