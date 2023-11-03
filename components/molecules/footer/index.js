import Link from 'next/link';
import Eporium from '../../../assets/images/eporium-logo.png';
import FooterLogo from '../../../assets/images/masarratlogo-footer.png';
import Image from 'next/image';
import {FaMobileAlt,FaLinkedin,FaInstagram,FaYoutube,FaFacebookSquare} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import {IoMdCall} from "react-icons/io";
import {ImLocation} from "react-icons/im";
import { FacebookShareButton,LinkedinShareButton,EmailShareButton } from "react-share";

const Footer = () => {
  return (
    <footer>
     
      <div>
          <ul className="copyright">
            <li>Copyright © 2022 <strong>Masarrat.</strong> <span>All rights reserved.</span></li>
            <li>Powered by <Link href={'https://www.sublimis.tech/'} target="_blank"><strong>Sublimis</strong>
            <Image src={Eporium} className="eporium-img" alt="eporium" title="Eporium"></Image></Link></li>
          </ul>
        </div>
    </footer>
  )
};


export default Footer