import React,{useState} from 'react';
import { IoClose } from "react-icons/io5";
import Checkbox from '../../atom/checkbox/input'


// const Promodata =[
//     {id:1, code:'First10',save_value:'301',percent_off:'10',min_purchase_value:'',expire_date:'12th March 2023'},
//     {id:2, code:'Summera40',save_value:'5,998',percent_off:'40',min_purchase_value:'100000',expire_date:'15th March 2023'},
//     {id:3, code:'Summera20',save_value:'602',percent_off:'20',min_purchase_value:'1500',expire_date:'15th March 2023'},
//     {id:4, code:'Summera30',save_value:'851',percent_off:'30',min_purchase_value:'5500',expire_date:'15th March 2023'},
//     {id:5, code:'First20',save_value:'301',percent_off:'20',min_purchase_value:'',expire_date:'12th March 2023'},
//     {id:6, code:'First30',save_value:'5,998',percent_off:'30',min_purchase_value:'100000',expire_date:'15th March 2023'}
// ]

const Promocodes = ({promoModal, handlePromoModal , handleClosePromoModal, Promodata, handleApplyPromoCode }) => {

    const [active, setActive] = useState(false)
    // const [data, setData] = useState(Promodata)

    const handlePromoCheck = (code) => {
        setActive(code)
      };

    return <>
        <div className={`cart-list ${promoModal ? 'show' : 'd-none'}`}>
            <div className="topheader">
                <h2>Apply Coupon</h2>
                <span className="btn-close btn-cart" onClick={handleClosePromoModal}><IoClose /></span>
            </div>
            <div className="cart-body">
                <ul className="product-details">

                    {
                        Promodata.map((item, index) => {
                            const { id, code, description, isActive, saveUpto } = item;

                            return (
                                <li key={index} className={`${isActive ? "active" : ""}`}>
                                    <div className='card'>
                                        <div className='card-body'>
                                            <div className='coupon'>
                                                <div className='checkbox'>
                                                    <Checkbox
                                                        autoComplete="off"
                                                        id={id}
                                                        type={"checkbox"}
                                                        value={code}
                                                        inputClass={"styled-checkbox"}
                                                        onChange={() => handleApplyPromoCode(code)}
                                                        checked={ isActive ? true : false }
                                                        // value={promocheckbox}
                                                    />
                                                    <label htmlFor={id} >
                                                        <span className="promo-btn">{code}</span>
                                                    </label>
                                                </div>
                                                <div className='save'>
                                                    <h6>Save ₹ {saveUpto}</h6>
                                                </div>
                                            </div>
                                            {description ? <p>{`${description}`}</p> : ""}
                                            {/* {item.min_purchase_value ? <p>Get <span>{`${item.percent_off}`}% off </span>on minimum purchase of ₹ {item.min_purchase_value}.</p> : ""}
                                            <p>Expires on: {item.expire_date}</p> */}
                                        </div>
                                    </div>
                                </li>

                            )
                        })

                    }

                </ul>
                <div className="cart-footer">
                    <div className="total-prize">
                        <p>Maximum Savings</p>
                        <h5>₹ 5,998</h5>
                    </div>
                    <div className="cart-button">
                        <button className="btn btn-primary" ><span>Apply</span></button>
                    </div>
                </div>
            </div>
        </div>
        <div className={promoModal ? 'bg-overlay show' : 'bg-overlay'} onClick={handleClosePromoModal}></div>
    </>;
}


export default Promocodes;