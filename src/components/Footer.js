// components/Footer.js
import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer id="msu-footer" className={styles.footer} aria-label="Primary footer for Mississippi State University">
      <div className={styles['container-fluid']}>
        {/* Left Side: Address and Contact Cards */}
        <div className={styles['left-section']}>
          <div className={styles.cardsContainer}>
            {/* Combined Logo and Address Card */}
            <div className={`card ${styles.gradientCard}`}>
              <div className={`${styles.cardContent} d-flex align-items-center`}>
                <a className={styles.logo} href="https://www.msstate.edu/">
                  <img
                    src="https://cdn01.its.msstate.edu/i/logos/msstate/SQUARE_WEB_white-300x300.png"
                    alt="Mississippi State University M mark"
                    title="Mississippi State University"
                  />
                </a>
                <div className={styles.libraryInfo}>
                  <strong>Mississippi State University Libraries</strong>
                  <div>395 Hardy Rd</div>
                  <div>P.O. Box 5408</div>
                  <div>Mail Stop 9570</div>
                  <div>Mississippi State, MS 39762</div>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className={`card ${styles.gradientCard} mt-3`}>
              <div className={`${styles.cardContent} d-flex align-items-center`}>
                <span className={`bi bi-telephone ${styles.icon}`}></span>
                <div className={styles.contactInfo}>
                  <strong>Phone</strong>
                  <div>(662) 325-7668</div>
                </div>
              </div>
            </div>

            {/* Fax Card */}
            <div className={`card ${styles.gradientCard} mt-3`}>
              <div className={`${styles.cardContent} d-flex align-items-center`}>
                <span className={`bi bi-printer ${styles.icon}`}></span>
                <div className={styles.contactInfo}>
                  <strong>Fax</strong>
                  <div>(662) 325-0011</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Links and Legal */}
        <div className={styles['right-section']}>
          <div className={styles.linksContainer}>
            {/* Report a Problem Button */}
            <button className={`btn btn-default ${styles['report-problem-button']}`}>
              Report a Problem
            </button>
            
            {/* Links Columns in Three Columns */}
            <div className={`row ${styles.linksRow}`}>
              <div className="col">
                <ul>
                  <li><a href="https://www.library.msstate.edu/about/library-administration">Administration</a></li>
                  <li><a href="https://www.library.msstate.edu/give">Giving</a></li>
                  <li><a href="https://www.library.msstate.edu/about/jobs">Jobs</a></li>
                  <li><a href="https://www.library.msstate.edu/directory">Directory</a></li>
                </ul>
              </div>
              <div className="col">
                <ul>
                  <li><a href="https://experience.arcgis.com/experience/18fb04cd79a5440a86940cec9fc797b2/page/Campus-Map/#!m/25839?ce/2400?ct/2400">Directions</a></li>
                  <li><a href="https://www.library.msstate.edu/hours">Hours</a></li>
                  <li><a href="https://msstate.libcal.com/calendar?cid=1645&t=d&d=0000-00-00&cal=1645&ct=27096,27072&inc=0">Events</a></li>
                  <li><a href="https://www.library.msstate.edu/news">News</a></li>
                </ul>
              </div>
              <div className="col">
                <ul>
                  <li><a href="https://www.library.msstate.edu/help">Help</a></li>
                  <li><a href="https://www.library.msstate.edu/accessibility">Accessibility</a></li>
                  <li><a href="https://www.library.msstate.edu/inclusive">Diversity</a></li>
                  <li><a href="https://www.msstate.edu/legal">Legal</a></li>
                </ul>
              </div>
            </div>

            {/* Legal Section */}
            <div className={`mt-4 pt-3 ${styles.disclosure}`}>
              <p>
                <a href="https://www.msstate.edu/contact">Customer Service</a> |
                <a href="https://www.policies.msstate.edu/policy/0302">EEO Statement</a> |
                <a href="https://secure.ethicspoint.com/domain/media/en/gui/24520/index.html">Ethics Line</a> |
                <a href="https://www.msstate.edu/legal/">Legal Notices</a> |
                <a href="https://www.msstate.edu/sites/www.msstate.edu/files/MSStateASR_FR_2024.pdf">Annual Security & Fire Report</a>
              </p>
              <p>
                Mississippi State University is an equal opportunity institution. Discrimination in university
                employment, programs or activities based on race, color, ethnicity, sex, pregnancy, religion,
                national origin, disability, age, sexual orientation, gender identity, genetic information, status
                as a U.S. veteran, or any other status protected by applicable law is prohibited. For more
                information, please contact the <a href="https://www.civilrights.msstate.edu/">Office of Civil Rights Compliance</a>.
              </p>
              <p>
                © 2021 Mississippi State University. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
