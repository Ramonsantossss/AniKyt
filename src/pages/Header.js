import React from 'react';
import styles from './index.module.css';

const Header = () => {
  return (
    <div className={`${styles.header}`} id="header">
      <div className={`${styles.logo_header}`}>
        <h3 style={{ color: 'white' }}><i>AniKit</i></h3>
      </div>
      <div className={`${styles.navigation_header}`} id="navigation_header">
      </div>
    </div>
  );
};

export default Header;
