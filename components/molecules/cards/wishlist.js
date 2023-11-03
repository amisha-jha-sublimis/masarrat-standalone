import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
// import { Tooltip } from '@nextui-org/react';
import { FiHeart } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import rupeesIcon from '../../../assets/images/carsouselImg/rupeesIcon.svg';
import addCartIcon from '../../../assets/images/carsouselImg/addCartIcon.svg';
import Luxurylabel from '../../molecules/luxurylabel'
import { addCartAction, fetchWishlistAction, removeWishlistAction } from '../../../redux/actions/cartAction';
import Close from '../../../assets/images/myaccount/close.svg';
import { loadState } from "../../../utils/localstorage";
import { fetchWithWait, finalSellPrice } from "../../helper/method";
import { fetchProductsAction } from "../../../redux/actions/productsAction";
import loadingimage from '../../../assets/images/header/masarratlogo.png';

const Wishlist = ({ Content: wishlist }) => {
    const dispatch = useDispatch()

    const { products } = useSelector((state) => state.products)

    const [appuser] = useState(loadState("appuser"))
    const [cartData, setCartData] = useState([])

    useEffect(() => {
        if(loadState("user")){
            dispatch(fetchProductsAction())
        }  
    }, [wishlist])

    useEffect(() => {
        if(products){
            const updatedProducts = products?.filter(product => {
                return wishlist?.some(item => item.product === product.id);
            });
            setCartData(updatedProducts);
        }
    }, [products, wishlist]);

    const handleRemoveWishlist = (item) => {
        const data = {
            sessionId: appuser,
            productId: item.id
        };
        console.log("handleRemoveWishlist", item)
        fetchWithWait({ dispatch, action: removeWishlistAction(data) }).then((res) => {
            if (res.status === 200) {
                dispatch(fetchWishlistAction({ "sessionId": appuser }))
            }
        }).catch((e) => {
            console.log(`error`, e)
        })
    }

    const handleMovetoAddtoCart = (item) => {
        let data = {
            "productId": item.id,
            "quantity": 1,
            "userId": "",
            "sessionId": appuser
        }
        dispatch(addCartAction(data))
        handleRemoveWishlist(item)
    }
    console.log(wishlist, "ojectobject")
    console.log("Product data", products)

    

    const cards = cartData?.map((item, index) => {
        const { price, media } = item  
        return (
            <div className="cards" key={index}>
                {/* {
                    item.luxury ? <Luxurylabel /> : ""
                } */}
                <div className="whiteList">
                    {/* <Tooltip content={"Remove"} className="whiteList" color="invert"> */}
                        <Image src={Close} onClick={() => handleRemoveWishlist(item) } />
                    {/* </Tooltip>  */}
                </div>
                <div className="cardsImg">
                    {
                    media !== null ?
                        // <figure onClick={() => handelRouterPages(item.slugName)}>
                        <figure >
                            <img
                                className="productImg"
                                src={media[0].media_file_path !== null && media[0].media_file_path !== "" ? media[0].media_file_path : loadingimage.src}
                                alt={media[0].media_alt_text !== null ? media[0].media_alt_text : "loading"}
                                title={media[0].media_title !== null ? media[0].media_title : "loading"}
                            />
                        </figure>
                        :
                        <figure onClick={() => handelRouterPages(cart.id)}>
                            <Image
                                className="productImg"
                                src={loadingimage}
                                alt={"loading"}
                                title={"loading"}
                            />
                        </figure>
                    }
                </div>
                <div className="cardsInfo">
                    <span>{item.name}</span>
                    <div className="priceAddCart">
                        <span><Image src={rupeesIcon} alt={item.name} />{
                            price !== null ? finalSellPrice(price).finalPrice : null
                        }</span>
                        {/* <Tooltip content={"Add To Cart"} color="invert"> */}
                        <span onClick={() => handleMovetoAddtoCart(item)}>
                            <Image src={addCartIcon} alt={item.name} />
                        </span>
                        {/* </Tooltip> */}
                    </div>
                </div>
            </div>
        )
    })

    return (
        <>
          {cards}
        </>
    )
}

export default Wishlist