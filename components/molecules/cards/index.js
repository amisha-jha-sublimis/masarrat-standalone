import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
// import { Tooltip } from '@nextui-org/react';
import { FiHeart } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import rupeesIcon from '../../../assets/images/carsouselImg/rupeesIcon.svg';
import addCartIcon from '../../../assets/images/carsouselImg/addCartIcon.svg';
import loadingimage from '../../../assets/images/header/masarratlogo.png';
import Carousel from "../../atom/carsousel";
import Luxurylabel from '../../molecules/luxurylabel'
import { AiFillCloseCircle } from "react-icons/ai";
import { addCartAction, addWishlistAction, fetchWishlistAction, removeWishlistAction } from '../../../redux/actions/cartAction';
import { fetchWithWait, finalSellPrice, generateCartId } from '../../helper/method';
import { useRouter } from "next/router";
import { loadState } from "../../../utils/localstorage";


const Carts = ({ slider, Content: Products, slidestoshow, path, category }) => {

    
    console.log("objectproductsproducts", Products)

    const { wishlist } = useSelector((state) => state.cart)

    const { categories, subCategories, error } = useSelector(
        (state) => state.categories
      );

    const [wishlistData, setWishlistData] = useState([])
    const [carts, setCards] = useState(Products)
    const [appuser] = useState(loadState("appuser"))

    const dispatch = useDispatch()
    const router = useRouter()

    
    useEffect(() => { 
        if(loadState("user")){
            dispatch(fetchWishlistAction({ "sessionId": appuser }))
        }  
    }, [Products])

   
    


    useEffect(() => {
        const updatedProducts = Products?.map((product) => {
          const isInWishlist = wishlist.some((item) => item.product === product.id);
          return { ...product, wishlist: isInWishlist };
        });
        setCards(updatedProducts);
    }, [wishlist,Products]);

    const handelRouterPages = (value) => {
        router.push(`/productdetails/${value}`)
    }

    const handleWishlistClick = (item) => {  
        // const { wishlist } = item  
        let data = {
            sessionId: appuser,
            productId: item.id
        }
        
        if(item.wishlist){
            fetchWithWait({ dispatch, action: removeWishlistAction(data) }).then((res) => {
                if (res.status === 200) {
                    dispatch(fetchWishlistAction({ "sessionId": appuser }))
                }
            })
        }else{
            fetchWithWait({ dispatch, action: addWishlistAction(data) }).then((res) => {
                if (res.status === 200) {
                    dispatch(fetchWishlistAction({ "sessionId": appuser }))
                }
            })
        }
    };

    const handleAddToCart = (productId) => {
        let data = {
            "productId": productId,
            "quantity": 1,
            "userId": "",
            "sessionId": appuser
        }
        dispatch(addCartAction(data))
    }


    const cards = carts?.map((item, index) => {
        const { price, media } = item   

        return (
            <div className="cards" key={index}>
                {
                    item.luxury ? <Luxurylabel /> : ""
                }
                {
                    <div className="whiteList">
                    {
                        path === "/myaccount" ?
                        // <Tooltip content={"Remove"} className="whiteList" color="invert">
                        <AiFillCloseCircle onClick={() => handleWishlistClick(item)} />
                        :
                        // <Tooltip content={"Add To Wishlist"} color="invert">
                        <FiHeart className={`${item?.wishlist ? "active" : ""}`} onClick={() => handleWishlistClick(item)}></FiHeart>
                        // </Tooltip>
                    }
                </div>
                        
                }
                
                <div className="cardsImg">
                    {
                        media !== null ?
                            <figure onClick={() => handelRouterPages(item.slugName)}>
                                <img
                                    className="productImg"
                                    src={media[0].media_file_path !== null && media[0].media_file_path !== "" ? media[0].media_file_path : loadingimage.src}
                                    alt={media[0].media_alt_text !== null ? media[0].media_alt_text : "loading"}
                                    title={media[0].media_title !== null ? media[0].media_title : "loading"}
                                />
                            </figure>
                            :
                            <figure onClick={() => handelRouterPages(item.slugName)}>
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
                    <h5>{item.name}</h5>
                    <div className="priceAddCart">
                        <span><Image src={rupeesIcon} alt={item.name} />{
                            price !== null ? finalSellPrice(price).finalPrice : null
                        }</span>
                        {/* <Tooltip content={"Add To Cart"} color="invert"> */}
                        <span onClick={() => handleAddToCart(item.id)}>
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
            {slider ?
                <Carousel slidestoshow={slidestoshow} slidestoscroll={2} >
                    {cards}
                </Carousel>
                : <div className="container">
                    <div className="default-card">
                        {cards}
                    </div>
                </div>
            }
        </>
    )
}

export default Carts