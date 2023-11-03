import * as Yup from 'yup';

export const signUpSchema = Yup.object({
    name: Yup.string().min(4).max(30).required("Enter Your Full Name"),
    email: Yup.string().email().required("Enter Your Email"),
    mobile: Yup.number().required("Please put 10 digit mobile number"),
    address1: Yup.string().min(15).max(30).required("Enter Your Address1"),
    state: Yup.string().required("Select Your State"),
    city: Yup.string().required("Select Your City"),
    pincode: Yup.number().required("Enter Your Pincode"),
    
    officename: Yup.string().min(10).max(30).required("Enter Your Company Name"),
    opname: Yup.string().min(4).max(30).required("Enter Your Company Person Name"),
    oaddress1: Yup.string().min(15).max(30).required("Enter Your Address1"),
    ostate: Yup.string().required("Select Your State"),
    ocity: Yup.string().required("Select Your City"),
    opincode: Yup.string().required("Select Your Pincode"),

    otherfield: Yup.string().min(10).max(30).required("Enter Your Filed"),
    othername: Yup.string().min(4).max(30).required("Enter Your Name"),
    otheraddress1: Yup.string().min(15).max(30).required("Enter Your Address1"),
    otherstate: Yup.string().required("Select Your State"),
    othercity: Yup.string().required("Select Your City"),
    otherpincode: Yup.string().required("Select Your Pincode"),

})