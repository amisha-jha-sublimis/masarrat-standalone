import { useState, useEffect } from "react";
import { alphabatesWithSpace, numberText } from "../../helper/method";
import TextInput from "../../molecules/input";
import Reactselect from "../../molecules/select";
import Link from 'next/link';
import AddressList from './addressList'
import { addAddressAction, removeAddressAction, updateAddressAction } from "../../../redux/actions/addressAction";
import { useDispatch, useSelector } from 'react-redux';

const stateData = [
    { id: 1, value: "maharashtra", label: "Maharashtra" },
    { id: 2, value: "gujarat", label: "Gujarat" },
    { id: 3, value: "himanchal", label: "Himanchal" },
    { id: 4, value: "utterprdesh", label: "UP" },
]

const cityData = [
    { id: 1, value: "thane", label: "Thane" },
    { id: 2, value: "vapi", label: "Vapi" },
    { id: 3, value: "sodhi", label: "Sodhi" },
    { id: 4, value: "deoria", label: "Deoria" },
]

const AddressForm = () => {

    const dispatch = useDispatch();

    const { address: addressList, lastOrderId } = useSelector((state) => state.address);

    let hasError;
    const [showaddress, setShowaddress] = useState(false);
    const [orderId, setOrderId] = useState(null);
    const [addressId, setAddressId] = useState(false);
    const [fullName, setFullName] = useState("");
    const [address, setAddress] = useState("");
    const [optionalAddress, setOptionalAddress] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [pincode, setPincode] = useState("");
    const [act, setAct] = useState(false)
    const [shipping, setShipping] = useState(false)
    const [errors, setErrors] = useState({
        errfullName: "",
        errAdress: "",
        errOptionalAddress: "",
        errPincode: "",
        errState: "",
        errCity: "",
    })


    useEffect(() => {
        addressList.forEach(item => {
            if(item.id === addressId){
                setFullName(item.fullName);
                setAddress(item.address)
                setOptionalAddress(item.optionalAddress)
                setState(item.state)
                setCity(item.city)
                setPincode(item.pincode)
            }
        })
        // setCheckOutDetails({
        //     ...checkOutDetails,
        //     products: [...cart]
        // })

    }, [addressId])

    const handleStateChange = (name, value) => {
        console.log("handle State change", name, "value =", value);

        if (name === "fullName") {
            let check = String(value)
            if (alphabatesWithSpace(check)) {
                setFullName(check)
                handleError(name, value)
            }
        }
        if (name === "address") {
            setAddress(value)
            handleError(name, value)
        }
        if (name === "optionalAddress") {
            setOptionalAddress(value)
            handleError(name, value)
        }
        if (name === "pincode") {
            let check = value
            if (numberText(check)) {
                setPincode(check)
                handleError(name, value)
            }
        }
        if (name === "state") {
            setState(value)
            handleError(name, value)
        }
        if (name === "city") {
            setCity(value)
            handleError(name, value)
        }
    }

    const handleError = (name, value) => {
        console.log("handle OnBlure Change", name, "value", value)
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
        if (name === "address") {
            if (!value.length) {
                allState["errAdress"] = "Address 1 is required."
            } else {
                allState["errAdress"] = ""
            }
        }
        if (name === "optionalAddress") {
            if (!value.length) {
                allState["errOptionalAddress"] = "Address 2 is required."
            } else {
                allState["errOptionalAddress"] = ""
            }
        }
        if (name === "pincode") {
            if (!value.length) {
                allState["errPincode"] = "Pincode is required."
            } else {
                allState["errPincode"] = ""
            }
        }
        if (name === "state") {
            if (!value.length) {
                allState["errState"] = "Select state."
            } else {
                allState["errState"] = ""
            }
        }
        if (name === "city") {
            if (!value.length) {
                allState["errCity"] = "Select city."
            } else {
                allState["errCity"] = ""
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
        if (!address.length) {
            allState["errAdress"] = "Address 1 is required."
            hasError = true
        } else {
            allState["errAdress"] = ""
        }
        if (!optionalAddress.length) {
            allState["errOptionalAddress"] = "Address is required."
            hasError = true
        } else {
            allState["errOptionalAddress"] = ""
        }
        if (!pincode.length) {
            allState["errPincode"] = "Pincode is required."
            hasError = true
        } else {
            allState["errPincode"] = ""
        }
        if (!state.length) {
            allState["errState"] = "Select state."
            hasError = true
        } else {
            allState["errState"] = ""
        }
        if (!city.length) {
            allState["errCity"] = "Select city."
            hasError = true
        } else {
            allState["errCity"] = ""
        }

        setErrors(prevError => ({
            ...prevError,
            ...allState
        }))
        return hasError
    }

    const handelAddNewAddress = () => {
        setShowaddress(true);
        setAddressId(false);
        setAct(false);
    }

    const handelRemoveAddress = (value) => {
        dispatch(removeAddressAction(value))
        setAddressId(false);
        setAct(false)
    }

    const handelEditAddress = (id) => {
        setAddressId(id)
        setShowaddress(true)
        setShipping(false)
    }

    const handelAddAddress = (e) => {
        e.preventDefault()
        if (!checkVailidation()) {
            let data = {
                id: Date.now(),
                fullName: fullName,
                address: address,
                country: "india",
                optionalAddress: optionalAddress,
                state: state,
                city: city,
                pincode: pincode,
            }

            dispatch(addAddressAction(data))
            setShowaddress(false)
        }
    }

    const handelFormUpdate = (e) => {
        e.preventDefault()
        if (!checkVailidation()) {
            let data = {
                id: addressId,
                fullName: fullName,
                address: address,
                optionalAddress: optionalAddress,
                state: state,
                city: city,
                pincode: pincode
            }

            dispatch(updateAddressAction(data))
            setShowaddress(!showaddress);
            setAddressId(false)
        }
    }

    const handelCancel = () => {
        setAddressId(false)
        setShowaddress(false)
    }


    return (
        <div className="container">
            <div className="delivery-details address-form">
                <div className="topheading">
                    <h4>My Address</h4>
                   {!addressList.length || showaddress ? <h6>* Mandatory Fields</h6> : null }
                </div>

                {  !addressList.length || showaddress ?
                    <div className="office-address">
                        <form>
                            <ul className="form-row">
                                <li className="form-group">
                                    <TextInput
                                        type={"text"}
                                        name={"fullName"}
                                        placeholder={"Kaushal Ranpura"}
                                        inputClass={"form-control"}
                                        lblClass={"input-lable"}
                                        label={"Full Name*"}
                                        value={fullName}
                                        autoComplete="off"
                                        onChange={handleStateChange}
                                        onBlur={handleError}
                                        errorMSg={errors.errfullName}
                                    />
                                </li>
                            </ul>

                            <ul className="form-row">
                                <li className="form-group">
                                    <TextInput
                                        type={"text"}
                                        name={"address"}
                                        label={"Address 1 *"}
                                        value={address}
                                        inputClass={"form-control"}
                                        lblClass={"input-lable"}
                                        autoComplete={"off"}
                                        onChange={handleStateChange}
                                        onBlur={handleError}
                                        errorMSg={errors.errAdress}
                                    />
                                </li>

                                <li className="form-group">
                                    <TextInput
                                        type={"text"}
                                        name={"optionalAddress"}
                                        label={"Address 2"}
                                        value={optionalAddress}
                                        inputClass={"form-control"}
                                        lblClass={"input-lable"}
                                        autoComplete={"off"}
                                        onChange={handleStateChange}
                                        onBlur={handleError}
                                        errorMSg={errors.errOptionalAddress}
                                    />
                                </li>

                                <li className="form-group">
                                    <TextInput
                                        type={"text"}
                                        name={"Country"}
                                        label={"Country"}
                                        value={"India"}
                                        placeholder={"India"}
                                        inputClass={"form-control"}
                                        lblClass={"input-lable"}
                                        autoComplete={"off"}
                                        disabled={"disabled"}
                                        onChange={handleStateChange}
                                        onBlur={handleError}
                                    />

                                </li>
                            </ul>

                            <ul className="form-row">
                                <li className="form-group">
                                    <Reactselect
                                        name={"state"}
                                        id={"state"}
                                        label={"State *"}
                                        options={stateData}
                                        value={state}
                                        lblClass={"input-lable"}
                                        class={"form-select"}
                                        onChange={handleStateChange}
                                        onBlur={handleError}
                                        errorMsg={errors.errState}
                                    />
                                </li>

                                <li className="form-group">
                                    <Reactselect
                                        name={"city"}
                                        id={"city"}
                                        label={"City *"}
                                        options={cityData}
                                        value={city}
                                        lblClass={"input-lable"}
                                        class={"form-select"}
                                        onChange={handleStateChange}
                                        onBlur={handleError}
                                        errorMsg={errors.errCity}
                                    />
                                </li>

                                <li className="form-group">
                                    <TextInput
                                        type={"text"}
                                        name={"pincode"}
                                        label={"Pincode *"}
                                        value={pincode}
                                        inputClass={"form-control"}
                                        lblClass={"input-lable"}
                                        autoComplete={"off"}
                                        onChange={handleStateChange}
                                        onBlur={handleError}
                                        errorMSg={errors.errPincode}
                                    />
                                </li>
                            </ul>

                            {
                                !addressId ? <>
                                    <button href="#" className="btn save-address" type="submit" onClick={handelAddAddress}>Save</button>
                                    <button href="#" className="btn btn-cancel" onClick={handelCancel}>Cancel</button>
                                </>
                                :
                                <div className="make-info">
                                    <button
                                        className="btn save-address"
                                        type="submit"
                                        onClick={handelFormUpdate}>
                                        <span>Update Record</span>
                                    </button>
                                <button
                                    className="btn btn-cancel"
                                    onClick={handelCancel}>
                                    <span>Cancel</span>
                                </button>
                            </div>
                            }
                        </form>
                    </div> : null
                }

                {addressList.length ?
                    <AddressList handelAddNewAddress={handelAddNewAddress} data={addressList}
                        handelRemoveAddress={handelRemoveAddress} handelEditAddress={handelEditAddress} addressId={addressId} act={act}
                    /> : null
                }
            </div>
        </div>
    )
}

export default AddressForm;