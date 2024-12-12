import Image from 'next/image';
import headerStyles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.logoContainer}>
        <Image
          src="https://cdn01.its.msstate.edu/i/logos/lib/HORIZONTAL_WEB_maroon.svg"
          alt="Mississippi State University Logo"
          width={500}
          height={100}
          layout="fixed"
        />
      </div>
      <div className={headerStyles.navContainer}>
        <ul className={headerStyles.navList}>
          <li className={headerStyles.navItem}><a href="https://www.msstate.edu">msstate.edu</a></li>
          <li className={headerStyles.navItem}><a href="https://my.msstate.edu">myState</a></li>
          <li className={headerStyles.navItem}><a href="https://directory.msstate.edu">MSU Directory</a></li>
        </ul>
        <div className={headerStyles.searchContainer}>
          <a className={headerStyles.searchBtn} href="https://www.library.msstate.edu/search-tools">Search MSU Libraries</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
