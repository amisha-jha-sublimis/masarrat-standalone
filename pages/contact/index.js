import React, { useState, useRef } from 'react';
import Layout from '../../layouts/standalon';
import bannerimg from '../../assets/images/contact_icon.svg';
import Image from "next/image";
import Link from 'next/link';

import TextInput from '../../components/molecules/input';
import { alphabatesWithSpace, fetchWithWait, isValidEmail, isValidMobileNo, numberText } from '../../components/helper/method';
// import { submitContactAction } from '../../redux/actions/contactAction';
import PageLaoder from '../../components/atom/loader/pageLaoder';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import loginApi from '../../services/loginApi';
import { isErrored } from 'stream';



const api = new loginApi();


const Contact = () => {


    // const dispatch = useDispatch()
    const router = useRouter()

    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [textMessage, setTextMessage] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState({
        errfullName: "",
        errEmail: "",
        errMobileno: "",
    })

    let hasError = false;

    const handleStateChange = (name, value) => {

        if (name === "fullName") {
            let check = String(value)
            if (alphabatesWithSpace(check)) {
                setFullName(check)
                handleError(name, value)
            }
        }
        if (name === "email") {
            setEmail(value)
            handleError(name, value)
        }

        if (name === "mobile") {
            let check = value
            if (numberText(check)) {
                setMobile(check)
                handleError(name, value)
            }
        }
        if (name === "textMessage") {
            setTextMessage(value)
        }
    }

    const handleError = (name, value) => {

        // console.log("handle OnBlure Change", name, "value", value)

        let allState = errors;

        if (name === "fullName") {
            if (!value.length) {
                allState["errfullName"] = "Enter your full name"
            } else if (value.length < 3) {
                allState["errfullName"] = "Name length should be 3 charector"
            } else {
                allState["errfullName"] = ""
            }
        }
        if (name === "email") {
            if (!value.length) {
                allState["errEmail"] = "Enter your email"
            } else if (!isValidEmail(value)) {
                allState["errEmail"] = "Invailid email."
            } else {
                allState["errEmail"] = ""
            }
        }
        if (name === "mobile") {
            if (!value.length) {
                allState["errMobileno"] = "Mobile no is required."
            } else if (!isValidMobileNo(value)) {
                allState["errMobileno"] = "Enter a valid number."
            } else {
                allState["errMobileno"] = ""
            }
        }
        setErrors(prevError => ({
            ...prevError,
            ...allState
        }))
    }

    const checkVailidation = () => {
        hasError = false;
        let allState = errors;

        if (!fullName.length) {
            allState["errfullName"] = "Enter your full name"
            hasError = true;
        } else if (fullName.length < 3) {
            allState["errfullName"] = "Name length should be 3 charector"
            hasError = true;
        } else {
            allState["errfullName"] = ""
        }
        if (!email.length) {
            allState["errEmail"] = "Enter your email"
            hasError = true
        } else if (!isValidEmail(email)) {
            allState["errEmail"] = "Invailid email."
            hasError = true
        } else {
            allState["errEmail"] = ""
        }
        if (!mobile.length) {
            allState["errMobileno"] = "Mobile no is required."
            hasError = true
        } else if (!isValidMobileNo(mobile)) {
            allState["errMobileno"] = "Enter a valid number."
            hasError = true
        } else {
            allState["errMobileno"] = ""
        }

        setErrors(prevError => ({
            ...prevError,
            ...allState
        }))
        return hasError
    }

    const handelFormSubmit = (e) => {
        e.preventDefault()

        // setIsLoading(false)
        // router.push("/contact/thankyou")

        // fetchWithWait({ dispatch, action: submitContactAction(data) }).then((res) => {
        //     if (res.status === 200) {
        //         setIsLoading(false)
        //         router.push("/contact/thankyou")
        //     } else { 
        //         setIsLoading(false)
        //         alert(res.message)
        //     }
        // }).catch((e) => {
        //     setIsLoading(false)
        //     alert(res.message)
        //     console.log(`error`, e)
        // })

        let isError = checkVailidation();
        if (!isError) {
            setIsLoading(true)
            let data = {
                fullName,
                email,
                mobileNumber: mobile,
                textMessage
            };
            api.ContactUs(data)?.then((res) => {
                if (res.status === 200) {
                    setIsLoading(false)
                    router.push("/contact/thankyou")
                } else {
                    setIsLoading(false)
                    alert(res.message)
                }
            }).catch((e) => {
                setIsLoading(false)
                alert(res.message)
                console.log(`error`, e)
            })

            // setIsLoading(false)
            // router.push("/contact/thankyou")

        }


    }

    if (isLoading) {
        return <PageLaoder />
    }




    return (
        <Layout>
            <section className="contact-page">
                <div className="container">

                    {/* <div className='banner-div'>
                        <h1>Contact</h1>
                        <div className='banner-img'><Image src={bannerimg} /></div>
                    </div> */}

                    <ul className="contact">
                        <li>
                            <div className="get-in-touch">
                                <div className="heading">
                                    <h2>Get In Touch</h2>
                                    <h4>Leave us your info and we will get back to you.</h4>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="form">
                                <div className="card">
                                    <div className="card-body">
                                        <p className="card-text">*Mandatory fields</p>

                                        <form className="form-row settings-list">
                                            <div className="form-group">
                                                <TextInput
                                                    name="fullName"
                                                    id={"fullName"}
                                                    value={fullName}
                                                    type={"text"}
                                                    onChange={handleStateChange}
                                                    onBlur={handleError}
                                                    inputClass={"form-control"}
                                                    placeholder={"Full Name *"}
                                                    errorMSg={errors["errfullName"]}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <TextInput
                                                    name="email"
                                                    id={"email"}
                                                    value={email}
                                                    type={"email"}
                                                    onChange={handleStateChange}
                                                    onBlur={handleError}
                                                    inputClass={"form-control"}
                                                    placeholder={"Email Id *"}
                                                    errorMSg={errors["errEmail"]}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <TextInput
                                                    name="mobile"
                                                    id={"mobile"}
                                                    value={mobile}
                                                    type={"tel"}
                                                    onChange={handleStateChange}
                                                    onBlur={handleError}
                                                    inputClass={"form-control"}
                                                    placeholder={"Mobile No. *"}
                                                    errorMSg={errors["errMobileno"]}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <textarea
                                                    placeholder="Message"
                                                    name={"textMessage"}
                                                    value={textMessage}
                                                    onChange={(e) => handleStateChange("textMessage", e.target.value)}
                                                    inputClass={"form-control"}
                                                    rows="5"
                                                    ols="5"
                                                />
                                            </div>
                                            <button className="btn btn-primary" type="submit" onClick={handelFormSubmit}>Contact Now</button>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </li>

                    </ul>

                </div>
            </section>

        </Layout>
    )
}


export default Contact