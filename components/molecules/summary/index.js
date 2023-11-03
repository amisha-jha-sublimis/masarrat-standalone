import { useEffect, useState } from 'react'
import Link from 'next/link';
import { useSelector,useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import {FaCaretDown} from "react-icons/fa";
import {FaCaretRight} from "react-icons/fa";
import rupeesIcon from '../../../assets/images/carsouselImg/rupeesIcon.svg';
import Image from 'next/image';
import TextInput from "../../molecules/input";
import { getToken, setPath } from '../../helper/method';
import { fetchCouponListAction } from '../../../redux/actions/addressAction';

const Summary = ({summary, handlePromoModal}) => {

    const router = useRouter()
    const dispatch = useDispatch();

    const { discount, subtotal, tax, afterDisTotal } = summary

    const { grandTotalAfterDis } = useSelector((state) => state.cart);
    const [afterGST, setAfterGST] = useState(0);
    const [GST, setGST] = useState(0);
    const [isShow, setisShow] = useState(false);
    const[promoshow, setPromoshow] = useState(false);
    const [promoapply, setPromoapply] = useState(false);
    const [promo, setPromo] = useState("");


    useEffect(() => {
        let gst = 0, sum = 0;
        sum = (grandTotalAfterDis * 18) / 100;
        gst = grandTotalAfterDis + sum;
        setGST(sum)
        setAfterGST(gst)
    }, [grandTotalAfterDis])

    const handleClick = event => {
        // 👇️ Add class on click
        event.currentTarget.parentNode.parentNode.classList.add('open');
      };
    
      const closeFilter = event => {
        console.log("close")
        // 👇️ Remove class on click
        event.currentTarget.parentNode.parentNode.classList.remove('open');
      };

      const handleStateChange = (name, value) => {
        if (name === "promoCode") {
            setPromo(value)
            handleError(name, value)
        }
      }


      
    const handleError = (name, value) => {
        if (name === "promoCode") {
            if (!value.length) {
                allState["errAdress"] = "Promo Code is required."
            } else {
                allState["errAdress"] = ""
            }
        }
    }
      
    // Apply promocode show hide
    const handlePromo = e =>{
        setPromoshow(!promoshow);
        // setPromoapply(!promoapply)
    }
    
    const validateCode = () => {
        setPromoshow(false)
        setPromoapply(true)
    }

    const handleRemove = () => {
        setPromoshow(false)
        setPromoapply(false)

    }

    const handleCheckout = () => {
        if(!getToken("token")){
            setPath("path", "/checkout")
        }
    }


    return (
        <li className="rightcol">
            <div className="order-summary" >
                <div className="order-sum" onClick={handleClick}>
                    <h3>Order Summary</h3>
                </div>
                <span className="close" onClick={closeFilter}>×</span>
                <hr/>
                <div className="summary-data">
                    <ul>
                        <li><h5>Sub Total</h5> <h5><span className="amount"><Image src={rupeesIcon} alt="rupeesIcon" title="rupeesIcon"/>{`${subtotal}`}</span></h5></li>

                        <li>
                            Discount<span className="amount"><Image src={rupeesIcon} alt="rupeesIcon" title="rupeesIcon"/>{`${discount}`}</span>
                        </li>

                        <li className='applyPromoCode' onClick={handlePromoModal}>
                        <>
                            {!promoapply ?
                            <>
                                <div className='_border_bottom custom_flex' >
                                    <a className="applypromocode" id={'code'} >Apply Promo</a>                            
                                </div>
                                <div className='_border_bottom custom_flex'>
                                    <div className="price">{<FaCaretRight/> }</div>
                                </div> 
                            </>
                            : null
                        } 
                        
                        </>
                        </li>
                        <li className='applyPromoCode'>
                        {promoshow ? 
                            <div className='_border_bottom apply-promo'>
                                <TextInput
                                    type={"text"}
                                    name={"promoCode"}
                                    inputClass={"form-control code"}
                                    lblClass={"input-lable"}
                                    autoComplete={"off"}
                                    onChange={handleStateChange}
                                    onBlur={handleError}
                                />
                                {/* <input name="pin" className="code" id="promocode" ></input> */}
                                <a href="#" className="btn btn-primary code-btn" onClick={validateCode} >Apply</a>
                            </div> : null
                            }     
                        </li>

                        { promoapply ?
                        <>
                            <li className='applyPromoCode'>
                        
                                <>
                                <div className="custom_flex save-promo">
                                    <div className="savepromocode">
                                        <h6 href="#" className="withpromo">Saved with Promo</h6>
                                    </div>
                                </div>
                                <div className="custom_flex save-promo">
                                    <div className="savepromocode">
                                        <div className="price price-promo">
                                            <Image src={rupeesIcon} alt="rupeesIcon" title="rupeesIcon"/> 5,999
                                        </div>
                                    </div>
                                </div>
                                </>
                            
                            </li>
                            <li>
                                <div className='remove'>
                                    <a href="#" onClick={handleRemove}>Remove</a>
                                </div>
                            </li>
                        </> : null         
                        }

                        <li>
                            Delivery Charges<span className="amount">-</span>
                        </li>
                        <li>
                            TAX<span className="amount"><Image src={rupeesIcon} alt="rupeesIcon" title="rupeesIcon"/>{`${tax}`}</span>
                        </li>
                        <hr/>
                        <li className='amountrow'>
                            <h5>Total Amount</h5><span className="amount"><Image src={rupeesIcon} alt="rupeesIcon" title="rupeesIcon"/>{`${afterDisTotal}`}</span>
                        </li>
                    </ul>
                    { router.pathname !== "/checkout" ?
                        <div className="text-center">
                            <Link href={'/checkout'} onClick={handleCheckout} className="btn btn-primary"><span>Proceed to Checkout</span></Link>
                        </div> : null
                    }
                </div>
            </div>
            { router.pathname !== "/checkout" ?
                <div className="text-center">
                    <Link href={'/'} className="shop-link"> Continue to shopping </Link>
                </div> : null
            }
        </li>

    )
}


export default Summary