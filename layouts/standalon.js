import { useEffect } from 'react';
import Head from 'next/head';

import Header from '../components/molecules/header/checkout';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import Eporium from '../assets/images/eporium-logo.png';
import logo from '../assets/images/header/masarratlogo.png';

export default ({ children, title = 'Next.js Ecommerce' }) => {

  // const {isActive} = useSelector((state) => state.cart);

//   useEffect(() =>{
//     let html = "";
//     if(!isActive){
//         html = document.querySelector("html");
//         html.classList.add("overflow-hidden")
//     }else{
//          html = document.querySelector("html");
//         html.classList.remove("overflow-hidden");
//     }
// },[isActive])

  return (
    <div className="stand-contact app-main">
      <Head>
        <title>{ title }</title>
      </Head>
      
      <header className={`stand-alon shadow`}>
        <div className='container'>
          <Link href="/" className="logo">
            <Image src={logo} alt="Masarrat Logo"></Image>
          </Link>
        </div>
      </header>
      <div className={`bg-overlay ${""}`}></div>
      
        <main className={'main-page'}>
          { children }
      </main>

      <footer>
        <div className='footerBottom'>
            <div className='container'>
            <ul className="copyright">
                <li>Copyright © 2022 <strong>Masarrat.</strong> <span>All rights reserved.</span></li>
                <li>Powered by <Link href={'https://www.sublimis.tech/'} target="_blank"><strong>Sublimis</strong>
                <Image src={Eporium} className="eporium-img" alt="eporium" title="Eporium"></Image> </Link></li>
            </ul>
            </div>
        </div>
      </footer>
    </div>
  )
}