import Image from "next/image";
import rupeesIcon from '../../../assets/images/carsouselImg/rupeesIcon.svg';
import addCartIcon from '../../../assets/images/carsouselImg/addCartIcon.svg';
import productData from '../../../components/molecules/wishlistItems/productdata';
import React, { useState } from "react";
// import { Tooltip } from '@nextui-org/react';
import { AiFillCloseCircle } from "react-icons/ai";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Wishlist from "../cards/wishlist";

const wishlistItems = productData.map((item, index) => {
    const handleClick = event => {
        // 👇️ toggle class on click
        event.currentTarget.classList.toggle('active');
    };

    return (
        <div className="cards" key={index}>
            <span class="cart-label">New</span>
                {/* <Tooltip content={"Remove"} className="whiteList" color="invert"> */}
                    <AiFillCloseCircle onClick={handleClick} />
                {/* </Tooltip> */}
            <div className="cardsImg">
                <a href="javascript:void(0)"><Image src={item.src} alt={item.alt} className="productImg" /></a>
            </div>
            <div className="cardsInfo">
                <h5>{item.title}</h5>
                <div className="priceAddCart">
                    <span><Image src={rupeesIcon} />{item.price}</span>

                    {/* <Tooltip content={"Add To Cart"} color="invert"> */}
                        <span>
                            <Image src={addCartIcon} />
                        </span>
                    {/* </Tooltip> */}
                </div>
            </div>
        </div>
    )
})

export default wishlistItems
