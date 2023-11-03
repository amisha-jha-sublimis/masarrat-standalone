import { useEffect, useState } from 'react'
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Image from 'next/image';
import rupeesIcon from '../../../assets/images/carsouselImg/rupeesIcon.svg';

const OrderSummary = ({summary, appliedCoupon}) => {

    const router = useRouter()

    const { lastOrderId, shippingData, grandTotalAfterDis } = useSelector((state) => state.address);
    const [shippingProducts, setShippingProducts] = useState([])
    const [afterGST, setAfterGST] = useState(0);
    const [GST, setGST] = useState(0);

    useEffect(() => {
        shippingData.map(item => {
            if(lastOrderId === item.orderId ){
                setShippingProducts(item.products)
            }
        })
    },[shippingData])

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
                        {/* {
                            Array.isArray(shippingProducts) && shippingProducts.map((item, index) => {
                                return <div key={index}>
                                    <li className="product-code">{item.name} 
                                    <p className="code"><span>{item.code}</span>
                                        <span className="amount"><Image src={rupeesIcon} alt="rupeesIcon" title="rupeesIcon"/>{`${item.afterDiscountAmu}`}</span> 
                                    </p> 
                                    </li>
                                </div>
                            })
                        } */}
                        <li><h5>Sub Total</h5> <h5><span className="amount"><Image src={rupeesIcon} alt="rupeesIcon" title="rupeesIcon"/>{`${summary["subtotal"] ? summary["subtotal"] : "-" }`}</span></h5></li>

                        <li>
                            Discount<span className="amount"><Image src={rupeesIcon} alt="rupeesIcon" title="rupeesIcon"/>{`${summary["couponDiscount"] > 0 ? summary["couponDiscount"] : 0}`}</span>
                        </li>

                        <li>
                        <>
                            <div class="custom_flex save-promo">
                                <div class="savepromocode">
                                    <h6 href="#" className="withpromo">Saved with Promo</h6>
                                </div>
                            </div>
                            <div class="custom_flex save-promo">
                                <div class="savepromocode">
                                    <div className="price price-promo">
                                    {/* <Image src={rupeesIcon} alt="rupeesIcon" title="rupeesIcon"/> */}
                                       {appliedCoupon}
                                    </div>
                                </div>
                            </div>
                            </>
                        </li>

                        <li>
                            Delivery Charges<span className="amount">-</span>
                        </li>
                        <li>
                            GST<span className="amount"><Image src={rupeesIcon} alt="rupeesIcon" title="rupeesIcon"/>{`${GST}`}</span>
                        </li>
                        <hr/>
                        <li className='amountrow'>
                            <h5>Total Amount</h5><span className="amount"><Image src={rupeesIcon} alt="rupeesIcon" title="rupeesIcon"/>{`${summary["afterDisTotal"] ? summary["afterDisTotal"] : 0}`}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </li>
    )
}


export default OrderSummary