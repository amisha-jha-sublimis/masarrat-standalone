// import Features_link from '../features/features_link';
import React, { useState, useRef } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import TextInput from '../input';

// import products_800 from '../../../assets/images/categories/acrylic_furniture.svg';

const ChangePassword = () => {

    // const [currentPassword, setCurrentPassword] = useState("")
    // const [newPassword, setNewPassword] = useState("")
    // const [confirmPassword, setConfirmPassword] = useState("")
    // const [errors, setErrors] = useState({
    //     errCurrentPassword: "",
    //     errNewPassword: "",
    //     errConfirmPassword: ""
    // })

    // const [passwordShow, setpasswordShow] = useState(false)
    // const [confirmPasswordShow, setConfirmPasswordShow] = useState(false)

    // const handlePasswordToggle = (value) => {
    //    if(value === "password") {
    //     setpasswordShow(!passwordShow)
    //    } else {
    //     setConfirmPasswordShow(!confirmPasswordShow)
    //     }
    // }
    
    // const handleStateChange = (name,value) => {

    //     if(name === "currentPassword"){
    //         setCurrentPassword(value)
    //         handleError(name,value)
    //     }
    //     if(name === "newPassword"){
    //         setNewPassword(value)
    //         handleError(name,value)
    //     }
    //     if(name === "confirmPassword"){
    //         setConfirmPassword(value)
    //         handleError(name,value)
    //     }
    // }
    
    // const handleError = (name,value) => {
        
        // console.log("handle OnBlure Change", name, "value", value)
    //     console.log("currentPassword",currentPassword,"newPassword",newPassword,"confirmPassword",confirmPassword);

    //     let allState = errors;

    //     if(name === "currentPassword"){
    //         if(!value.length){
    //             allState["errCurrentPassword"] = "Enter your Password"
    //         }else if(value.length < 3){
    //             allState["errCurrentPassword"] = "Password length should be 3 charector"
    //         }else{
    //             allState["errCurrentPassword"] = ""
    //         }
    //     }
    //     if(name === "newPassword"){
    //         if(!value.length){
    //             allState["errNewPassword"] = "Confirm new Password"
    //         }else if(value.length < 3){
    //             allState["errNewPassword"] = "Password length should be 3 charector"
    //         }else{
    //             allState["errNewPassword"] = ""
    //         }
    //     }
    //     if(name === "confirmPassword"){
    //         if(!value.length){
    //             allState["errConfirmPassword"] = "Enter new Password"
    //         }else if(value.length < 3){
    //             allState["errConfirmPassword"] = "Password length should be 3 charector"
    //         }else{
    //             allState["errConfirmPassword"] = ""
    //         }
    //     }
    // }    


    return (

        <div className="container change_password">
            <h5>My Settings</h5>
            <div className="delivery-details edit-details my-setting">
                {/* <h4>Change Password</h4>
                <form className="form-row settings-list">
                    <div className="form-group">
                        <TextInput
                            name="currentPassword"
                            label={"Enter Current Password"}
                            id={"currentPassword"}
                            value={currentPassword}
                            errorMSg={errors.errCurrentPassword}
                            onChange={handleStateChange}
                            onBlur={handleError}
                            type={"password"}
                            inputClass={"form-control"}
                            placeholder={""}
                        />
                    </div>
                    <div className="form-group password">
                        <TextInput
                            name="newPassword"
                            label={"Enter New Password"}
                            id={"newPassword"}
                            value={newPassword}
                            errorMSg={errors.errNewPassword}
                            onChange={handleStateChange}
                            onBlur={handleError}
                            type={passwordShow ? "password" : "text"}
                            inputClass={"form-control password-validation"}
                            placeholder={""}
                        />
                        {
                           !passwordShow ? <FaEye onClick={() => handlePasswordToggle("password")} className="FaEye" /> 
                           : <FaEyeSlash onClick={() => handlePasswordToggle("password")} className="FaEye" /> 
                        }
                    </div>
                    <div className="form-group password">
                        <TextInput
                            name="confirmPassword"
                            label={"Confirm New Password"}
                            id={"confirmPassword"}
                            value={confirmPassword}
                            errorMSg={errors.errConfirmPassword}
                            onChange={handleStateChange}
                            onBlur={handleError}
                            type={confirmPasswordShow ? "password" : "text"}
                            inputClass={"form-control"}
                            placeholder={""}
                        />
                        {
                           !confirmPasswordShow ? <FaEye onClick={() => handlePasswordToggle("confirm")} className="FaEye" /> 
                           : <FaEyeSlash onClick={() => handlePasswordToggle("confirm")} className="FaEye" /> 
                        }
                    </div>
                    <a href="#" className="btn btn-primary" type="submit"><span>Save</span></a>
                </form> */}
                
                {/* <div className="valid-password">
                                    <h4>Password Strength :</h4>
                                    <p>Your Password Must Contain :</p>
                                    <ul className="helper-text">
                                        <li className="length">At least 8 Character</li>
                                        <li className="number">Minimum 1 Number</li>
                                        <li className="special">Minimum 1 Special Character</li>
                                    </ul>
                                </div> */}
                <div className="unsubscribe-mail">
                    <h4>Unsubscribe from our mailing list</h4>
                    <form>
                        <div className="form-group">
                            <label>Email*</label>
                            <input type="email" placeholder="kaushalranpura077@gmail.com" name="email"
                                className="form-control" />
                        </div>
                        <a href="#" className="btn btn-primary" type="submit"><span>Unsubscribe</span></a>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default ChangePassword;