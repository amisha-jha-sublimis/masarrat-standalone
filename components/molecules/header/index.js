import React, { useState, useEffect, useRef, useCallback } from 'react';
import useOnClickOutside from 'use-onclickoutside';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import TextInput from '../input'
import logo from '../../../assets/images/header/masarratlogo.png';
import searchicon from '../../../assets/images/header/search_icon.svg';
import location from '../../../assets/images/header/location.svg';
import wishlist from '../../../assets/images/header/wishlist.svg';
import cart from '../../../assets/images/header/cart.svg';
import locationIcon from '../../../assets/images/location_icon.png';
import Allcategories from '../../../components/molecules/header/all_categories';
import Help from '../../../components/molecules/header/help';
import LoginLogout from './loginLogout'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { loadState } from '../../../utils/localstorage';

const Header = () => {


 

  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);


  // useOnClickOutside(searchRef, closeSearch);

  const items = [
    {
      id: 0,
      name: 'Cobol'
    },
    {
      id: 1,
      name: 'JavaScript'
    },
    {
      id: 2,
      name: 'Basic'
    },
    {
      id: 3,
      name: 'PHP'
    },
    {
      id: 4,
      name: 'Java'
    }
  ]

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result)
  }

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item)
  }
  const handleStateChange = (name, value) => {
    setPincode(value)
  }

  const handleError = (name, value) => {
    console.log("object")
  }

  const handleCheckPinCode = (e) => {
    e.preventDefault();
    console.log("handleCheckPinCode", pincode)
  }


  const handleOnFocus = () => {
    // document.body.classList.add('overlay');
    console.log('Focused')
  }

  
  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>id: {item.id}</span>
        <span style={{ display: 'block', textAlign: 'left' }}>name: {item.name}</span>
      </>
    )
  }


  return (
      <div className="container-fluid">
      <div className='container'>
        <Link href="/" className="logo">
          <Image src={logo} alt="Masarrat Logo"></Image>
        </Link>
</div>

      </div>
  )
};


export default Header;

