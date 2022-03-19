/* eslint-disable */
import './Footer.css';
import React from "react"; 
import img_logo_footer from '../images/img_logo_footer.png';


function Footer () {
      return(
        <div className='FR-footer-gray'>
        <img src={img_logo_footer} className="img-logo-footer"/> 
        <span className='footer-gray-txt'>
          국민대학교 소프트웨어학부<br></br>
          캡스톤 15조
        </span>
      </div>
      );
}
export default Footer;