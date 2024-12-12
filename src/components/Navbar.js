"use client";

import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  const handleLiveChatClick = () => {
    const chatUrl = "https://ask.library.msstate.edu/chat/widget/031cca098b18cdad90bb2ab36b406a72?referer=https%3A%2F%2Fwww.library.msstate.edu%2F&referer_title=Home%20-%20Mississippi%20State%20University%20Libraries&auth_id=0";
    window.open(chatUrl, "_blank", "toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=400, height=600");
  };

  return (
    <div className={`main-menu-container shadow sans-serif ${styles.navContainer}`}>
      <nav id="main-menu-lib" className={`navbar navbar-expand-lg navbar-light container-lg`}>
        <div className={styles.navItemsContainer}>
          {/* Dropdowns */}
          {[{
              name: "Find & Borrow",
              sections: [
                {
                  title: "Materials",
                  links: [
                    { name: "Books", url: "https://www.library.msstate.edu/collections/general/books" },
                    { name: "Course Reserves", url: "https://www.library.msstate.edu/services/course-reserves" },
                    { name: "Government Documents", url: "https://www.library.msstate.edu/collections/general/government-documents" },
                    { name: "Indexes & Databases", url: "https://www.library.msstate.edu/collections/general/indexes-and-databases" },
                    { name: "Journals & Articles", url: "https://www.library.msstate.edu/collections/general/journals-and-articles" },
                    { name: "Maps", url: "https://www.library.msstate.edu/collections/general/maps" },
                    { name: "Media", url: "https://www.library.msstate.edu/collections/general/media" },
                    { name: "Microforms", url: "https://www.library.msstate.edu/collections/general/microforms" },
                    { name: "Newspapers", url: "https://www.library.msstate.edu/collections/general/newspapers" },
                    { name: "Primary Sources", url: "https://www.library.msstate.edu/services/find-primary-sources" }
                  ],
                },
                {
                  title: "Search Tools",
                  links: [
                    { name: "Databases A-to-Z", url: "https://guides.library.msstate.edu/az.php" },
                    { name: "Digital Collections", url: "https://scholarsjunction.msstate.edu/archives-and-special-collections/" },
                    { name: "Discovery", url: "https://mlp.ent.sirsi.net/client/en_US/msstate/search/?te=-179139742" },
                    { name: "Online Catalog", url: "https://mlp.ent.sirsi.net/client/en_US/msstate/" },
                    { name: "Scholars Junction", url: "https://scholarsjunction.msstate.edu/" },
                    { name: "Archives and Special Collections", url: "https://msstate-archives.libraryhost.com/" },
                    { name: "Theses and Dissertations", url: "https://www.library.msstate.edu/services/search-theses-and-dissertations" },
                  ],
                },
                {
                  title: "Help & Information",
                  links: [
                    { name: "Access Services", url: "https://www.library.msstate.edu/access-and-information" },
                    { name: "Ask A Librarian", url: "https://www.library.msstate.edu/help" },
                    { name: "Interlibrary Loan", url: "https://illiad.library.msstate.edu/illiad/" },
                    { name: "Renew Books", url: "https://www.library.msstate.edu/services/renew-books" },
                    { name: "Research Guides", url: "https://guides.library.msstate.edu/" },
                    { name: "Research Services", url: "https://www.library.msstate.edu/research-instruction-and-outreach" },
                    { name: "Sign into Library Catalog Account", url: "https://mlp.ent.sirsi.net/client/en_US/msstate/" },
                    { name: "Subject Specialists", url: "https://www.library.msstate.edu/directory/subject-specialists" },
                    { name: "Tutorials", url: "https://www.library.msstate.edu/tutorials" },
                  ],
                },
              ],
            },
            {
              name: "Teach & Learn",
              sections: [
                {
                  title: "Teaching",
                  links: [
                    { name: "Course Reserves", url: "https://www.library.msstate.edu/services/course-reserves" },
                    { name: "Embed Librarian in Canvas", url: "https://www.library.msstate.edu/services/embed-librarian-in-canvas" },
                    { name: "Log in to Canvas", url: "https://canvas.msstate.edu/" },
                    { name: "Register Class for a Workshop", url: "https://www.library.msstate.edu/services/register-class-for-workshop" },
                    { name: "Request a Course Guide", url: "https://www.library.msstate.edu/services/request-course-guide" },
                    { name: "Request a Custom Workshop", url: "https://www.library.msstate.edu/services/request-custom-workshop-or-library-instruction-session" },
                  ],
                },
                {
                  title: "Learning",
                  links: [
                    { name: "ETD Submission Process", url: "https://www.library.msstate.edu/services/etd-submission-process" },
                    { name: "ETD Templates", url: "https://www.library.msstate.edu/services/etd-templates" },
                    { name: "Learn about Copyright and Fair Use", url: "https://guides.library.msstate.edu/copyright" },
                    { name: "Tutorials", url: "https://www.library.msstate.edu/tutorials" },
                    { name: "Workshops", url: "https://www.library.msstate.edu/workshops" },
                  ],
                },
                {
                  title: "Writing",
                  links: [
                    { name: "Citation Formats", url: "https://guides.library.msstate.edu/citationguides" },
                    { name: "EndNote Resources", url: "https://guides.library.msstate.edu/endnote" },
                    { name: "Mobile Writing Center", url: "https://www.library.msstate.edu/services/mobile-writing-center" },
                    { name: "Scholarly Communication Services", url: "https://www.library.msstate.edu/scholarly-communication-services" },
                    { name: "Writing Resources for ESL Students", url: "https://guides.library.msstate.edu/eslresources" },
                  ],
                },
              ],
            },
            {
              name: "Services",
              sections: [
                {
                  title: "Services For",
                  links: [
                    { name: "Alumni", url: "https://guides.library.msstate.edu/alumni" },
                    { name: "Distance Learners", url: "https://guides.library.msstate.edu/distancelearners" },
                    { name: "Faculty and Instructors", url: "https://guides.library.msstate.edu/faculty" },
                    { name: "Graduate Students", url: "https://guides.library.msstate.edu/graduate" },
                    { name: "Scholars", url: "https://www.library.msstate.edu/scholarly-communication-services" },
                    { name: "Undergraduate Students", url: "https://guides.library.msstate.edu/undergraduate" },
                    { name: "Users with Disabilities", url: "https://www.library.msstate.edu/accessibility" },
                    { name: "Visitors", url: "https://www.library.msstate.edu/visit" },
                    { name: "View All Services", url: "https://www.library.msstate.edu/services" },
                  ],
                },
                {
                  title: "Technology",
                  links: [
                    { name: "Borrow Equipment", url: "https://msstate.libcal.com/equipment?lid=3008" },
                    { name: "CAVS Mixed Reality Studio", url: "https://www.library.msstate.edu/dmc/spaces/virtual-reality-studio" },
                    { name: "Remote Access (VPN)", url: "https://servicedesk.msstate.edu/TDClient/45/Portal/KB/?CategoryID=80" },
                    { name: "Request 3D Printing Consultation", url: "https://msstate.libwizard.com/f/dmc-makerspace" },
                    { name: "Request a Glowforge Consultation", url: "https://msstate.libwizard.com/f/dmc-makerspace" },
                    { name: "Scholarly Communication Services", url: "https://www.library.msstate.edu/scholarly-communication-services" },
                    { name: "Use a Computer", url: "https://www.library.msstate.edu/services/use-computer" },
                    { name: "Wireless Network (Eduroam)", url: "https://servicedesk.msstate.edu/TDClient/45/Portal/KB/?CategoryID=16" },
                  ],
                },
                {
                  title: "Documents",
                  links: [
                    { name: "Copy", url: "https://www.library.msstate.edu/services/copy-documents" },
                    { name: "Fax", url: "https://www.library.msstate.edu/services/fax" },
                    { name: "Laminate", url: "https://www.library.msstate.edu/services/laminate-document" },
                    { name: "Print", url: "https://www.library.msstate.edu/services/print" },
                    { name: "Scan", url: "https://www.library.msstate.edu/services/scan-documents" },
                    { name: "Wide-Format Prints", url: "https://msstate.libwizard.com/f/dmc-printing" },
                  ],
                },
              ],
            },
            {
              name: "Locations & Spaces",
              sections: [
                {
                  title: "Locations",
                  links: [
                    { name: "Libraries", url: "https://www.library.msstate.edu/msu-libraries" },
                    { name: "Museums", url: "https://www.library.msstate.edu/museums" },
                    { name: "Centers and Service Areas", url: "https://www.library.msstate.edu/centers-and-service-areas" },
                  ],
                },
                {
                  title: "Rooms & Spaces",
                  links: [
                    { name: "Rooms", url: "https://www.library.msstate.edu/rooms" },
                    { name: "Floor Plans", url: "https://www.library.msstate.edu/floor-plans" },
                  ],
                },
              ],
            },
            {
              name: "Collections",
              sections: [
                {
                  title: "MSU Libraries Collections",
                  links: [
                    { name: "All Collections", url: "https://www.library.msstate.edu/collections" },
                    { name: "General Collections", url: "https://www.library.msstate.edu/generalcollections" },
                    { name: "Archives and Special Collections", url: "https://www.library.msstate.edu/specialcollections" },
                    { name: "Digital Collections", url: "https://www.library.msstate.edu/digitalcollections" },
                    { name: "Scholars Junction", url: "https://scholarsjunction.msstate.edu/" },
                  ],
                },
                {
                  title: "Other Unique Collections",
                  links: [
                    { name: "Ulysses S. Grant Presidential Collection", url: "https://www.usgrantlibrary.org/" },
                    { name: "The Frank and Virginia Williams Collection of Lincolniana", url: "https://www.library.msstate.edu/williamscollection" },
                    { name: "Mississippi Political Collection", url: "https://www.library.msstate.edu/mpc" },
                    { name: "Charles H. Templeton, Sr. Music Collection", url: "https://www.library.msstate.edu/templeton/templeton-collections" },
                    { name: "John Grisham Collection", url: "https://www.library.msstate.edu/grisham" },
                    { name: "Myrna Colley-Lee Costume Collection", url: "https://www.library.msstate.edu/collections/physical/myrna-colley-lee-costume-collection" },
                    { name: "State of Mississippi Adopted Textbook Collection", url: "https://www.library.msstate.edu/collections/other/state-mississippi-adopted-textbook-collection" },
                  ],
                },
                {
                  title: "Galleries & Exhibits",
                  links: [
                    { name: "Current Exhibits", url: "https://www.library.msstate.edu/exhibits#current" },
                    { name: "Digital Exhibits", url: "https://msstate-exhibits.libraryhost.com/exhibits" },
                    { name: "Louis Burns Brock, Jay Brock, and Hank Brock Gallery", url: "https://www.library.msstate.edu/oldmain/louis-burns-brock-jay-brock-and-hank-brock-gallery" },
                    { name: "Past Exhibits", url: "https://www.library.msstate.edu/exhibits/past" },
                    { name: "Permanent Exhibits", url: "https://www.library.msstate.edu/exhibits#permanent" },
                  ],
                },
              ],
            },
            {
              name: "About",
              sections: [
                {
                  title: "Administration",
                  links: [
                    { name: "Library Administration", url: "https://www.library.msstate.edu/about/library-administration" },
                    { name: "Connect with the Dean", url: "https://www.library.msstate.edu/about/connect-dean" },
                    { name: "Organizational Chart", url: "https://www.library.msstate.edu/about/orgchart" },
                    { name: "Memberships, Partners, and Consortia", url: "https://www.library.msstate.edu/about/partners" },
                    { name: "Strategic Plan", url: "https://www.library.msstate.edu/about/strategic-plan" },
                    { name: "Brochure", url: "https://scholarsjunction.msstate.edu/cgi/viewcontent.cgi?article=1001&context=libpromos" },
                    { name: "Employment", url: "https://www.library.msstate.edu/about/jobs" },
                    { name: "Promotion and Tenure Policies", url: "https://scholarsjunction.msstate.edu/libpolicies/12/" },
                    { name: "Inclusive Excellence", url: "https://www.library.msstate.edu/inclusive" },
                    { name: "Mission and Vision Statement", url: "https://www.library.msstate.edu/about/mission-and-vision" },
                    { name: "Give to MSU Libraries", url: "https://www.library.msstate.edu/give" },
                  ],
                },
                {
                  title: "Information",
                  links: [
                    { name: "Accessibility", url: "https://www.library.msstate.edu/accessibility" },
                    { name: "Directory", url: "https://www.library.msstate.edu/directory" },
                    { name: "Subject Specialists", url: "https://www.library.msstate.edu/directory/subject-specialists" },
                    { name: "Hours", url: "https://www.library.msstate.edu/hours" },
                    { name: "Floor Plans", url: "https://www.library.msstate.edu/floor-plans" },
                    { name: "MSU Parking Info", url: "https://www.transportation.msstate.edu/" },
                    { name: "Tour the Libraries", url: "https://www.library.msstate.edu/services/tour-library" },
                    { name: "Policies", url: "https://www.library.msstate.edu/policies" },
                    { name: "News", url: "https://www.library.msstate.edu/news" },
                    { name: "Library Changes and Updates", url: "https://guides.library.msstate.edu/dbupdate" },
                  ],
                },
              ],
            },
            {
              name: "My Accounts",
              sections: [
                {
                  title: "Library Accounts",
                  links: [
                    { name: "Online Catalog", url: "https://mlp.ent.sirsi.net/client/en_US/msstate/search/account?&" },
                    { name: "ILLiad", url: "https://illiad.library.msstate.edu/illiad/" },
                    { name: "Scholars Junction", url: "https://scholarsjunction.msstate.edu/cgi/login.cgi?return_to=https%3A//scholarsjunction.msstate.edu/cgi/myaccount.cgi%3Fcontext%3D&context=https%3A//scholarsjunction.msstate.edu" },
                  ],
                },
                {
                  title: "University Accounts",
                  links: [
                    { name: "MyState", url: "https://my.msstate.edu/" },
                    { name: "Canvas", url: "https://canvas.msstate.edu/" },
                  ],
                },
              ],
            },
          ].map((dropdown, idx) => (
            <div key={idx} className={`${styles.navItem}`}>
              <button
                type="button"
                className={`${styles.navButton} dropdown-toggle`}
                onClick={() => toggleDropdown(dropdown.name)}
              >
                {dropdown.name}
              </button>
              {activeDropdown === dropdown.name && (
                <div className={`absolute top-full left-0 w-full ${styles.largeDropdown}`}>
                  <div className={`d-flex ${styles.dropdownContainer}`}>
                    {dropdown.sections.map((section, sectionIdx) => (
                      <div key={sectionIdx} className={styles.dropdownColumn}>
                        <h3 className={styles.sectionTitle}>{section.title}</h3>
                        <ul className={styles.linkList}>
                          {section.links.map((link, linkIdx) => (
                            <li key={linkIdx}>
                              <a href={link.url}>{link.name}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          
          <div className={styles.helpButtonContainer}>
            <a href="https://www.library.msstate.edu/help" className={styles.helpButton}>
              Help
            </a>
          </div>
          <div className={styles.liveChatButtonContainer}>
            <button type="button" className={styles.liveChatButton} onClick={handleLiveChatClick}>
              Live Chat
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;