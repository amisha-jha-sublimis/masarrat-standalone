// import Features_link from '../features/features_link';
import React, { useState, useRef } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
import { FaEye } from 'react-icons/fa';
import TextInput from '../input';
import { values } from "lodash";
import { useFormik } from "formik";
import { signUpSchema } from "../../../assets/schemas";
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import Select from '../select';

const MyProfile = () => {

    const initialValues = {
        name: "",
        email: "",
        mobile: "",
    }

    const { user } = useSelector((state) => state.whichUser);
    const [loginUser, setLoginUser] = useState(null);
    const [isDisabled, setIsDisabled] = useState(true);
    const [buttonText, setButtonText] = useState(false);
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    // const [disabled, setDisabled] = useState("true")
    const [errors, setErrors] = useState({
        errName: "",
        errEmail: "",
        errMobile: ""
    })

    const handleClick1 = () => {
        setIsDisabled(!isDisabled)
        setButtonText(!buttonText);
    };

    const handleClear = () => {
        setName("")
        setEmail("")
        setMobile("");
    };

    const handleStateChange = (name, value) => {

        if (name === "name") {
            setName(value)
            handleError(name, value)
        }
        if (name === "email") {
            setEmail(value)
            handleError(name, value)
        }
        if (name === "mobile") {
            setMobile(value)
            handleError(name, value)
        }
    }

    useEffect(() => {
        const storedData = localStorage.getItem('user');
        if (storedData) {
          // Parse the JSON string into a JavaScript object
          const parsedData = JSON.parse(storedData);
          setLoginUser(parsedData);
        }
      }, [user]);


    const handleError = (name, value) => {

        // console.log("handle OnBlure Change", name, "value", value)
        console.log("name", name, "mobile", mobile, "mobile", mobile);

        let allState = errors;

        if (name === "name") {
            if (!value.length) {
                allState["errName"] = "Enter your Name"
            } else if (value.length < 3) {
                allState["errName"] = "Name length should be 3 charector"
            } else {
                allState["errName"] = ""
            }
        }
        if (name === "email") {
            if (!value.length) {
                allState["errEmail"] = "Enter your Email"
            } else if (value.length < 3) {
                allState["errEmail"] = "Email length should be 3 charector"
            } else {
                allState["errEmail"] = ""
            }
        }
        if (name === "mobile") {
            if (!value.length) {
                allState["errMobile"] = "Enter mobile"
            } else if (value.length < 3) {
                allState["errMobile"] = "Mobile length should be 3 charector"
            } else {
                allState["errMobile"] = ""
            }
        }
    }

    // form Validation
    const { values, errorss, handleBlur, touched, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values) => {
            console.log("this is value", values);
        }
    })


    return (

        <div className="container my_profile">
            <h5 className='hides'>My Profile</h5>
            <div className="edit-details my-setting">
                <ul className="form-row">
                    <li className="form-group">
                    <label>Full Name</label>
                        <TextInput
                            name="name"
                            label={"Your Name *"}
                            id={"name"}
                            value={name}
                            errorMSg={errors.errName}
                            onChange={handleStateChange}
                            onBlur={handleBlur}
                            autoComplete={"off"}
                            type={"name"}
                            inputClass={"form-control"}
                            placeholder={"Enter First and Last Name"}
                           
                        />
                    </li>
                    <li className="form-group">
                    <label>Email</label>
                        <TextInput
                            name="email"
                            label={"Email ID*"}
                            id={"email"}
                            value={email}
                            errorMSg={errors.errEmail}
                            onChange={handleStateChange}
                            onBlur={handleBlur}
                            autoComplete={"off"}
                            type={"email"}
                            inputClass={"form-control"}
                            placeholder={"Enter your Email ID"}
                          
                        />
                    </li>
                    <li className="form-group mobile">
                        <label>Mobile</label>
                        <div className="cust-select">
                            <select className="form-select" required disabled={isDisabled}>
                                <option value="" selected="selected">+91</option>
                                <option value="7">+91</option>
                            </select>

                            <TextInput
                                name="mobile"
                                id={"mobile"}
                                value={mobile}
                                errorMSg={errors.errMobile}
                                onChange={handleStateChange}
                                onBlur={handleBlur}
                                autoComplete={"off"}
                                type={"mobile"}
                                inputClass={"form-control"}
                                placeholder={"Enter your mobile no."}
                                disabled={isDisabled}
                            />
                        </div>
                    </li>
                </ul>

                <a href="#" className="btn btn-primary" onClick={handleClick1}>{!buttonText ? "Edit" : "Save" }</a>
                {!buttonText ? null : <a href="#" className="btn btn-primary" onClick={handleClear}>{ "Cancel" }</a>}
            </div>
        </div>

    );
}

export default MyProfile;