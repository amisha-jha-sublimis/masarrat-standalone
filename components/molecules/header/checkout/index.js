import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import LoginLogout from '../loginLogout'
import { useDispatch } from 'react-redux';

import logo from '../../../../assets/images/header/masarratlogo.png';
import Image from 'next/image';


const Header = ({ isErrorPage }) => {
  // const dispatch = useDispatch()

  const router = useRouter();

  const arrayPaths = ['/'];

  const [onTop, setOnTop] = useState((!arrayPaths.includes(router.pathname) || isErrorPage) ? false : true);

  console.log("object router pathname", router.pathname)



  return (
    <header className={`site-header ${!onTop ? 'site-header--fixed' : ''} shadow`}>
      <div className="container-fluid">
        <div className="navigate">
          <div className='container'>
            <div className='checkout-header'>
              <Link href="/" className="logo">
                {/* <Image src={logo} alt="Masarrat Logo"></Image> */}
              </Link>
              <div className={"site-header__actions"}>
                <LoginLogout />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </header>
  )
};

export default Header;