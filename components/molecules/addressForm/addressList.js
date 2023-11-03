import Link from 'next/link';
import React from 'react';

const AddressList = ({data, handelAddNewAddress, handelRemoveAddress,handelEditAddress}) => {
    return (
        <div className="office-address">
            <div className="address-review">
                <div className="addresses">

                {
                    data.map((item,index) => {
                        return <div className='address-box' key={index}>
                            <strong>{item.personName ? `Contect person:- ${item.personName}` : item.fullName}</strong>
                            <p>{`${item.address} ${item.optionalAddress}`}</p>
                            <p>{`${item.city} ${item.state} ${item.pincode}`}</p>
                            <div className='address-span'>
                                <span onClick={() => handelEditAddress(item.id) }>Edit</span> | 
                                <span onClick={() => handelRemoveAddress(item)}>Remove</span>
                            </div>
                        </div>
                    })
                }
                    
                    {/* <div className="address-box">
                        <h4>Kaushal Ranpura</h4>
                        <p>501, A, Jyouti Tower, Thakur Village, M Rao Marg, Kandivali (E), Mumbai, Maharashtra, 400 045. India</p>

                        <div class="address-span"><Link href="#">Edit</Link> <span className="or">|</span> <Link href="#">Remove</Link></div>
                    </div> */}
                </div>
                    <button className="btn save-address" onClick={handelAddNewAddress}>Add New Address</button>
            </div>
        </div>
    )
}


export default AddressList;