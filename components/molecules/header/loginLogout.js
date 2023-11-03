import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchUserAction } from '../../../redux/actions/registerAction';
import { getToken } from '../../helper/method';
import userimg from '../../../assets/images/header/user.svg';


const LoginLogout = () => {
    const router = useRouter();
    // const dispatch = useDispatch();

    // const { user } = useSelector((state) => state.whichUser);

    const [dropdownOpen, setdDropdownOpen] = useState(false)
    const [loginUser, setLoginUser] = useState(null)

    // useEffect(() => {
    //     const token = localStorage.getItem('token');
    //     if(token){
    //         dispatch(fetchUserAction())
    //         if(getToken("path")){
    //             let path = getToken("path");
    //             router.replace(`${path}`)
    //             localStorage.removeItem("path")
    //         }
    //     }
    // }, []);

    // useEffect(() => {
    //     const storedData = localStorage.getItem('user');  
    //     if (storedData) {
    //         // Parse the JSON string into a JavaScript object
    //         const parsedData = JSON.parse(storedData);
    //         setLoginUser(parsedData);
    //       }
    // },[user])


    const toggle = () => {
        setdDropdownOpen(!dropdownOpen);
    }
    
    const handleLogout = () => {
        localStorage.clear();
        setLoginUser(null);
        router.replace('/');
    }

    return (
        <>
            {
                loginUser ? <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>
                <Image src={userimg} alt="User" className="user-img"></Image>
                <span>{loginUser.firstName}</span>
                </DropdownToggle>
                <DropdownMenu>
                <DropdownItem>
                    <Link href={"/myaccount"}>
                        <Image src={userimg} alt="User" className="user-img"></Image><span>My Account</span>
                    </Link>
                </DropdownItem>
                <DropdownItem onClick={handleLogout}><Image src={logout} alt="logout" className="user-img"></Image><span>Logout</span></DropdownItem>
                </DropdownMenu>
            </Dropdown>
            : 
            <Link className="user" href={"/login"}>
                <Image src={userimg} alt="User" className="user-img"></Image>
                <span>Sign In</span>
            </Link>
            }
        </>
    )
}

export default LoginLogout;