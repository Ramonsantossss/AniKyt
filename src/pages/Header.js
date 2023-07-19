import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={`${styles.header}`} id="header">
      <button onClick={toggleSidebar} className={`${styles.btn_icon_header}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
      </button>
      <div className={`${styles.logo_header}`}>
        <h3 style={{ color: 'white' }}><i>AniKit</i></h3>
      </div>
      <div className={`${styles.navigation_header}`} id="navigation_header">
        <button onClick={toggleSidebar} className={`${styles.btn_icon_header}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8...
        </svg>
        </button>
        <a href="index.html">Home</a>
      </div>
    </div>
  );
};

export default Header;
