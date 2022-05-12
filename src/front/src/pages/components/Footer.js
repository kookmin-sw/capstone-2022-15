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
          Interviewer's Voice From "onairstudio"
        </span>
        
      </div>
      );
}
export default Footer;
