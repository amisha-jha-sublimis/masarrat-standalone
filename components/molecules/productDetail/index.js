import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import PD_Accordion from '../../organism/pdaccordion';
import AddtoCart from '../addtocart';
import { FiHeart } from "react-icons/fi";
import {
    EmailShareButton, FacebookShareButton, WhatsappShareButton,
    TwitterShareButton, EmailIcon, FacebookIcon, WhatsappIcon, TwitterIcon
} from "react-share";
import { addCartAction, addWishlistAction, removeWishlistAction, updateCartAction, viewCartAction } from "../../../redux/actions/cartAction";
import { productDetailsAction } from "../../../redux/actions/productsAction"
import { useStateWithCallback } from '../../lib/useStateWithCallback';
import Luxurylabel from '../luxurylabel';
import { FaShareAlt } from 'react-icons/fa';
import { IoIosSettings } from 'react-icons/io';
import { ImCart } from 'react-icons/im';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { fetchWithWait, finalSellPrice } from '../../helper/method';
import { ToastContainer, toast } from 'react-toastify';
import Zoomable from '../zoomable';
import Cards from '../../molecules/cards'
import { loadState } from '../../../utils/localstorage';
import PageLoader from '../../atom/loader/pageLaoder';

const option = [
    { lable: 1, value: 1 },
    { lable: 2, value: 2 },
    { lable: 3, value: 3 },
    { lable: 4, value: 4 },
    { lable: 5, value: 5 },
]

function ProductDetail() {
    const router = useRouter()
    const slug = router.query.slug
    const dispatch = useDispatch()

    const { isActive } = useSelector((state) => state.cart);
    const { productDetails } = useSelector((state) => state.products);
    const { isLoading } = useSelector((state) => state.loader);


    const [details, setDetails] = useState([]);
    const [prod_name, setProdName] = useState("");
    const [prod_code, setProdCode] = useState("");
    const [price, setPrice] = useState([]);
    const [productData, setProductData] = useState(null)
    const [media, setMedia] = useState([]);
    const [description, setDescription] = useState(null);
    const [simiralMedia, setSimiralMedia] = useState([]);
    const [size, setSize] = useState([]);
    const [proinfomation, setProInfomation] = useState(null);
    const [additionalInfo, setAdditionalInfo] = useState(null);
    const [keyfeatures, setKeyFeatures] = useState(null);
    const [delivery, setDelivery] = useState(null);
    const [productId, setProductId] = useState(null);
    const [SEO, setSEO] = useState([]);
    const [wish, setWish] = useState(details.wishlist);
    const [selectedMedia, setSelectedMedia] = useState(null);
    const [units, setUnits] = useStateWithCallback(1);
    const [appuser] = useState(loadState("appuser"))


    useEffect(() => {
        const data = {
            slug: slug
        }
        dispatch(productDetailsAction(data))
    }, [router])

    useEffect(() => {
        if (productDetails !== null) {
            productDetails.forEach(item => {
                const { id, media, price, description, size, name, SKU, seo, product_infomation,
                    additional_info, key_features, delivery_instructions } = item
                if (item.hasOwnProperty("media")) {
                    setMedia(media)
                }
                if (item.hasOwnProperty("name")) {
                    setProdName(name)
                }
                if (item.hasOwnProperty("SKU")) {
                    setProdCode(SKU)
                }
                if (item.hasOwnProperty("price")) {
                    setPrice(price)
                }
                if (item.hasOwnProperty("description")) {
                    setDescription(description)
                }
                if (item.hasOwnProperty("size")) {
                    setSize(size)
                }
                if (item.hasOwnProperty("product_infomation")) {
                    setProInfomation(product_infomation)
                }
                if (item.hasOwnProperty("additional_info")) {
                    setAdditionalInfo(additional_info)
                }
                if (item.hasOwnProperty("key_features")) {
                    setKeyFeatures(key_features)
                }
                if (item.hasOwnProperty("id")) {
                    setProductId(id)
                }
                if (item.hasOwnProperty("delivery_instructions")) {
                    setDelivery(delivery_instructions)
                }
                if (item.hasOwnProperty("seo")) {
                    setSEO(seo)
                }
                setProductData(item)
            });
        }
    }, [productDetails])

    useEffect(() => {
        if (Array.isArray(media) && media.length) {
            let count = 0;
            media.forEach(item => {
                const { media_file_path } = item
                if (media_file_path && count === 0) {
                    setSelectedMedia(media_file_path)
                    count++
                }
            })
        }

    }, [media])


    const handleToggle1 = () => {
        let data = {
            "productId": productId,
            "quantity": units,
            "userId": "",
            "sessionId": appuser
        }
        fetchWithWait({ dispatch, action: addCartAction(data) }).then((res) => {
            if (res.status === 200) {
                toast.success("Cart added");
            }
        }).catch((e) => {
            console.log(`error`, e)
        })
    };

    const handleSelectImage = (value) => {
        setSelectedMedia(value)
    };

    function handleSelectedUnit(value) {
        setUnits(value);
    }

    const handleWishlistClick = (value) => {

        value.wishlist = !value.wishlist
        setWish(!wish)
        if (!wish) {
            dispatch(addWishlistAction(value))
        } else {
            dispatch(removeWishlistAction(value))
        }
    };

    const handleShowAllProduct = () => {
        router.push("/products")
    }

    return (
        <>
            <div className="product-detail">
                <div className="desc">
                    <div className="maain col-6">
                        <div className="flex">
                            {
                                media.map((item, index) => {
                                    const { media_file_path } = item
                                    return (
                                        <>
                                            {media_file_path ?
                                                <div className="img img-div" key={index}>
                                                    <img className="mini-img" src={media_file_path} alt="images" onClick={() => handleSelectImage(media_file_path)} />
                                                </div>
                                                : null}
                                        </>
                                    )
                                })
                            }
                        </div>
                        <div className='view-img large-image'>
                            <Zoomable
                                src={selectedMedia}
                                zoomimgalt={"zoomImgAlt"}
                            />
                        </div>
                    </div>

                    <div className="details col-6">
                        <div className="title">
                            <div>
                                {details.luxury ? <Luxurylabel /> : null}
                                {prod_code ? <h3 className={`product-title ${details.luxury ? null : 'margintop'}`}>{prod_code}</h3> : null}
                            </div>
                            <div className="share">
                                <h3 className="add-wishlist">
                                    <FiHeart className={`${details.wishlist ? "active" : ""}`} onClick={() => handleWishlistClick(details)}></FiHeart> Add to Wishlist</h3>

                                <Popup className='social-media-share-icon' trigger={<h3 className="share-text cursor-pointer"><FaShareAlt className="FaShareAlt" />  Share </h3>}
                                    position="bottom center">
                                    <FacebookShareButton url="https://youtu.be/2BnTYEafRQc" quote="Facebook" hashtag="#React">
                                        <FacebookIcon size={32} logoFillColor="white" round="true"></FacebookIcon>
                                    </FacebookShareButton>

                                    <WhatsappShareButton url="https://youtu.be/2BnTYEafRQc" title="WhatsApp">
                                        <WhatsappIcon size={32} logoFillColor="white" round="true"></WhatsappIcon>
                                    </WhatsappShareButton>

                                    <TwitterShareButton url="https://youtu.be/2BnTYEafRQc" title="Email">
                                        <TwitterIcon size={32} logoFillColor="white" round="true"></TwitterIcon>
                                    </TwitterShareButton>

                                    <EmailShareButton url="https://youtu.be/2BnTYEafRQc" title="Email">
                                        <EmailIcon size={32} logoFillColor="white" round="true"></EmailIcon>
                                    </EmailShareButton>
                                </Popup>
                            </div>
                        </div>

                        {prod_name ? <h1 className="cat">{prod_name}</h1> : null}

                        {price ?
                            <div className="price">
                                <h3 className="value"> ₹ {finalSellPrice(price).finalPrice} {finalSellPrice(price).finalDiscont > 0 ? <span>{finalSellPrice(price).finalDiscont}</span> : null}</h3>
                            </div> : null
                        }

                        {size.length ? <p className="size"><strong>Size</strong> in Inches: <span>{size}</span></p> : null}

                        <div className="quantityy">
                            <h3 className="title">Quantity</h3>

                            <div className="details">
                                <select className="form-select" onChange={(e) => handleSelectedUnit(e.target.value)}>
                                    {
                                        option.map((li, index) => {
                                            return <option key={index} value={li.lable}>{li.value}</option>
                                        })
                                    }
                                </select>

                                <button className="btn add_cart site-header__btn-menu" onClick={handleToggle1} >
                                    <ImCart /> Add to Cart
                                </button>

                                <AddtoCart isActive={isActive} handleToggle1={handleToggle1} />

                                <button className="btn quote">
                                    Request for Quote
                                </button>

                                {/* <Tooltip 
                                    css={{background : "#E9F7FD", border: "1px solid #00A0E3", color:"#000", 'breakBefore':{background : "#E9F7FD"}}}
                                    content={"Customised Thickness / Size / Design & Colour Can be Made as Order Quantity & Value"}
                                    placement="bottom"
                                    color="primary"
                                > */}
                                <button className="btn customise">
                                    <IoIosSettings /> Customise
                                </button>
                                {/* </Tooltip> */}
                            </div>
                        </div>


                        <p className="select_delivery">Select Delivery Location
                            <span className="enter">Enter the pincode of your area to check product availability and delivery options</span></p>
                        <div className="search">
                            <form className="d-flex" role="search">
                                <div className="input-group">
                                    <input className="form-control" type="search" name="search-product" placeholder="Enter Pincode" id="enter-pincode" />
                                    <span className="input-group-append">
                                        <button className="btn btn-outline-secondary" type="button">
                                            Check
                                        </button>
                                    </span>
                                </div>

                            </form>
                        </div>
                        <p className="product_information">Product Information</p>
                        <PD_Accordion proinfomation={proinfomation} additionalInfo={additionalInfo}
                            keyfeatures={keyfeatures} description={description} delivery={delivery} />
                    </div>
                </div>


                <div className="sliderWapper productDetailSlider">
                    <h1 className="title">Similar Products</h1>
                    {/* <Cards Content={Content} slider={Content >= 5 ? true : false } slidestoshow={5}/> */}
                    <div className='viewAllBtn'><button onClick={handleShowAllProduct} type='button'>View All</button></div>
                </div>

            </div>
            <ToastContainer />
            {
                isLoading ? <PageLoader /> : null
            }
        </>
    );
}


export default ProductDetail;
