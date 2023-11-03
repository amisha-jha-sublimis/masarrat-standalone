import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Wishlist from '../cards/wishlist';
import Image from 'next/image';
import EmptyImage from '../../../assets/images/myaccount/whishlist.png';
import Empty from '../../atom/empty';
import { fetchWishlistAction } from '../../../redux/actions/cartAction';
import { loadState } from '../../../utils/localstorage';
import dummyimg from "../../../assets/images/cart-empty.jpg"

function MyWishlist() {
    const router = useRouter()
    const dispatch = useDispatch()
    const [appuser] = useState(loadState("appuser"))

    const { wishlist } = useSelector((state) => state.cart);


    useEffect(() => {
        if (loadState("user")) {
            dispatch(fetchWishlistAction({ "sessionId": appuser }))
        }
    }, [])
    console.log("wishlist data ", wishlist)

    return (
        <div>
            <h5>My Wishlist</h5>
            {
                <div className="my_wishlist myaccWislist">
                    {
                        wishlist?.length ?
                            <div className="mainCards">
                                <Wishlist Content={wishlist} path={router.route} />
                            </div>
                            :
                            <Empty imgsrc={EmptyImage} content={"Your Wishlist is Empty!"} />
                            
                    }
                </div>
            }
        </div>

    );
}

export default MyWishlist;

