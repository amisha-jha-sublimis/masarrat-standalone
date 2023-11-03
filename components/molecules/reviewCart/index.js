// import Features_link from '../features/features_link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { FiHeart } from 'react-icons/fi';
import { FaTags, FaTrashAlt } from 'react-icons/fa';
import { useStateWithCallback } from '../../lib/useStateWithCallback';
import Luxurylabel from '../luxurylabel';
import { fetchWithWait } from '../../helper/method';
import { loadState } from '../../../utils/localstorage';
import dummyimg from "../../../assets/images/cart-empty.jpg";

const option = [
    { lable: 1, value: 1 },
    { lable: 2, value: 2 },
    { lable: 3, value: 3 },
    { lable: 4, value: 4 },
    { lable: 5, value: 5 },
]

const Review = ({ Cartdata }) => {

    const dispatch = useDispatch();
    const cusrouter = useRouter();

    let [units, setUnits] = useStateWithCallback(1);
    const [routePath, setroutePath] = useState('');
    const [data, setData] = useState(Cartdata);
    const [appuser] = useState(loadState("appuser"))


    useEffect(() => {
        setroutePath(cusrouter.route)
    }, [cusrouter])

    const handleMoveWishlist = (value) => {

        let data = {
            "sessionId": appuser,
            "productId": value.product
        }
        fetchWithWait({ dispatch, action: addWishlistAction(data) }).then((res) => {
            if (res.status === 200) {
                handleRemoveCart(value.id);
                dispatch(fetchWishlistAction({ "sessionId": appuser }))
            }
        }).catch((e) => {
            console.log(`error`, e)
        })
    };

    const handleSelectedUnit = (value, id) => {
        setUnits(value);
        let data = {
            "productId": id,
            "userId": "",
            "quantity": value,
            "sessionId": appuser
        }
        fetchWithWait({ dispatch, action: updateCartAction(data) }).then((res) => {
            if (res.status === 200) {
                dispatch(listCartAction({ "sessionId": appuser }))
            } else { dispatch(listCartAction({ "sessionId": appuser })) }
        }).catch((e) => {
            console.log(`error`, e)
        })

    }

    const handleRemoveCart = (id) => {
        const data = {
            "cartId": id,
            "sessionId": appuser
        }
        fetchWithWait({ dispatch, action: removeCartAction(data) }).then((res) => {
            if (res.status === 200) {
                dispatch(listCartAction({ "sessionId": appuser }))
            } else { dispatch(listCartAction({ "sessionId": appuser })) }
        }).catch((e) => {
            console.log(`error`, e)
        })

    }
  

    return (
        <div>
            {
                Cartdata !== undefined ? <>
                    {
                        Cartdata.map((item, index) => {

                            const { price: { discountValue, total, price, subtotal } } = item

                            return <li key={index} style={{ borderBottom: "1px solid silver" }}>
                                <ul className="product-price-counter">
                                    <li>
                                        <figure>
                                            <img className="card-img-top" src={item.image} alt="" />
                                        </figure>
                                    </li>
                                    <li>
                                        {item.luxury ? <p className='labelLuxury'><Luxurylabel /></p> : ""}
                                        {discountValue > 0 ? <h5 className="offer"><FaTags />{`${discountValue}% off on MRP`}</h5> : null}
                                        <span className="product">{item.productName}</span>
                                        <span className="product-desc">24 KT Yellow Gold(5 g)</span>
                                        <span className='product-size'><b>Size</b> {item.size}</span>
                                        <div className="product-calculation">
                                            <div className="quantity">
                                                <select className="form-select" value={item.qty} onChange={(e) => handleSelectedUnit(e.target.value, item.product)}>
                                                    {
                                                        option.map((li, index) => {
                                                            return <option key={index} value={li.lable}>{li.value}</option>
                                                        })
                                                    }
                                                </select>
                                            </div>
                                            <div className="prize-details">
                                                <span>{`₹ ${price}`}</span>
                                                {discountValue > 0 ? <del>{`₹ ${subtotal}`}</del> : null}
                                            </div>
                                            <div className="last-prize">
                                                {`₹ ${total}`}
                                                {routePath !== "/reviewcart" ? <span onClick={() => handleRemoveCart(item.id)}> <FaTrashAlt /> </span> : null}
                                            </div>

                                            {routePath === "/reviewcart" ?
                                                <ul className="wishlist">
                                                    <li onClick={!item.wishlist ? () => handleMoveWishlist(item) : null}>
                                                        <FiHeart className={`${item.wishlist ? "active" : ""}`} /> {`${item.wishlist ? "" : "Move to Wishlist"}`} </li>
                                                    <li onClick={() => handleRemoveCart(item.id)}><FaTrashAlt /> Remove</li>
                                                </ul> : null
                                            }
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        })
                    }
                </> :
                    (

                        <div>
                            <img
                                className="card-img"
                                src={dummyimg?.src}
                                alt={"dummyimg"}
                                title={"dummyimg"}
                            />
                            {/* <h1>Empty Cart...</h1> */}
                            <a className="abcdef" href="/">Shop Now</a>
                        </div>
                    )

            }
        </div>
    );
}

export default Review;