import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useDispatch } from 'react-redux';

import logo from '../../../assets/images/header/masarratlogo.png';


const Header = ({ isErrorPage }) => {
  const dispatch = useDispatch()

  const router = useRouter();

  const arrayPaths = ['/'];

  const [onTop, setOnTop] = useState((!arrayPaths.includes(router.pathname) || isErrorPage) ? false : true);



  return (
    <header className={`site-header ${!onTop ? 'site-header--fixed' : ''} shadow`}>
      <div className="container-fluid">
        <div className="navigate">

          <div className='container'>
            <Link href="/" className="logo">
              <Image src={logo} alt="Masarrat Logo"></Image>
            </Link>
            <button>Kaushal</button>
          </div>
        </div>
      </div>
    </header>
  )
};

export default Header;