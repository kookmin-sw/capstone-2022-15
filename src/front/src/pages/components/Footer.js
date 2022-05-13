/* eslint-disable */
import './Footer.css';
import React from "react"; 
import img_logo_footer from '../images/img_logo_footer.png';


function Footer () {
      return(
        <div className='FR-footer-gray'>
        <img src={img_logo_footer} className="img-logo-footer"/> 
        <span className='footer-gray-txt'>
          KOOKMIN UNIVERSITY SOFTWARE<br/>
          2022 CAPSTONE TEAM 15 "INFU"<br/><br/>
          Interviewer's Voice From "onairstudio"<br/>
          Interviewer's Face Data From "한국과학기술연구원과 한국지능정보사회진흥원"
        </span>
        
      </div>
      );
}
export default Footer;
