import Image from "next/image";
import Link from "next/link";
import Productdata from "./data.js";
import { finalSellPrice } from "../../helper/method.js";
import { Tooltip } from "reactstrap";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

function Productdisplay({ data, displayImg, handleWishlistClick, handleLoadMore}) {
  return (
    <div className="mainWrapper">
      <ul>

        {Array.isArray(data) &&
          data?.map((item, id) => {
            const { price, media } = item;
            const setClass = []

            return (
              <li key={id}>
                 
                 {/* <div
                  className="heart"
                  onClick={(e) => {
                    handleWishlistClick(item);
                  }}
                >
                  <Tooltip
                    content={"Add to Wishlist"}
                    placement="bottomEnd"
                    className={`wishlist-link tooltip-label ${
                      item.wishlist ? "displayblk" : "displaynone"
                    }`}
                  >
                    {!item.wishlist ? (
                      <AiOutlineHeart className="wishlist" />
                    ) : (
                      <AiFillHeart
                        className="wishlist"
                        style={{ color: "#64366E" }}
                      />
                    )}
                  </Tooltip>
                </div> */}

                <Link href={`/productdetails/${item.slugName}`}>
                  <div className="d-flex prodList">
                    <div className="item">
                      {media !== null ? (
                        <div className="d-flex prodList">
                          <div className="d-flex prodList">
                            <img
                             className={`boxItem ${setClass}`}
                              src={media[0]?.media_file_path}
                              alt={media[0]?.media_alt_text}
                              title={media[0]?.media_file_name}
                            />
                          </div>
                          {/* <div className="d-flex prodList">
                            {media[1] ? (
                              <img
                              className={`boxItem ${setClass}`}
                                src={media[1]?.media_file_path}
                                alt={media[1]?.media_alt_text}
                                title={media[1]?.media_file_name}
                              />
                            ) : (
                              <img
                              className={`boxItem ${setClass}`}
                                src={media[2]?.media_file_path}
                                alt={media[2]?.media_alt_text}
                                title={media[2]?.media_file_name}
                              />
                            )}
                          </div> */}
                        </div>
                      ) : (
                        <div className="d-flex prodList">
                          <div className="d-flex prodList">
                            <img
                             className={`boxItem ${setClass}`}
                              //   src={dummyimg?.src}
                              alt={"dummyimg"}
                              title={"dummyimg"}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="card-body">
                    <h4>{item.name}</h4>

                    <p>
                      {" "}
                      {price ? (
                        <div className="price">
                          {" "}
                          ₹ {finalSellPrice(price).finalPrice}
                        </div>
                      ) : null}
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
      </ul>
      <div className="btn-section">
        {/* <Link href={"#"} className="btn btn-primary" onClick={handleLoadMore}>
          Load More
        </Link> */}
      </div>


      {/* <div className="mainWrapper">
                {
                    Productdata.map((mainElem, i) => {
                        const { category_multipleImg } = mainElem

                        return <div className="d-flex prodList" key={i}>
                            {
                                category_multipleImg.map((item, j) => {
                                    const { subCategory } = item
                                    const setClass = []

                                    if (displayImg === "mutipleImg") {
                                        if (subCategory.length === 4) {
                                            setClass.push("showFourImg");
                                            return (
                                                <div key={j} className={`boxItem ${setClass}`}>
                                                    <h5>{item.boxHeading}</h5>
                                                    <ul>
                                                        {subCategory.map((td, k) => {
                                                            return (
                                                                <li className="item" key={k}>
                                                                    <Link href="#">
                                                                        <Image src={td.mediaFilePath} alt={td.mediaFileName} />
                                                                        <p>{td.name}</p>
                                                                    </Link>
                                                                </li>
                                                            )
                                                        })}
                                                    </ul>
                                                    <Link href="#" className="viewMorebtn"><span className="viewMoreLink">View More</span></Link>
                                                </div>
                                            )
                                        } else if (subCategory.length === 5) {
                                            setClass.push("showFiveImg");
                                            return (
                                                <div key={j} className={`boxItem ${setClass}`}>
                                                    <h5>{item.boxHeading}</h5>
                                                    <ul>
                                                        {subCategory.map((td, index) => {
                                                            return (
                                                                <li className="item" key={index}>
                                                                    <Link href="#">
                                                                        <Image src={td.mediaFilePath} alt={td.mediaFileName} />
                                                                        <p>{td.name}</p>
                                                                    </Link>
                                                                </li>
                                                            )
                                                        })}
                                                    </ul>
                                                    <Link href="#" className="viewMorebtn"><span className="viewMoreLink">View More</span></Link>
                                                </div>
                                            )
                                        } else if (subCategory.length === 6) {
                                            setClass.push("showSixImg");
                                            return (
                                                <div key={j} className={`boxItem ${setClass}`}>
                                                    <h5>{item.boxHeading}</h5>
                                                    <ul>
                                                        {subCategory.map((td, i) => {
                                                            return (
                                                                <li className="item" key={i}>
                                                                    <Link href="#">
                                                                        <Image src={td.mediaFilePath} alt={td.mediaFileName} />
                                                                        <p>{td.name}</p>
                                                                    </Link>
                                                                </li>
                                                            )
                                                        })}
                                                    </ul>
                                                    <Link href="#" className="viewMorebtn"><span className="viewMoreLink">View More</span></Link>
                                                </div>
                                            )
                                        }
                                    }
                                })
                            }

                            {
                                mainElem.category_threeImgShow.map((threeImg, idx) => {
                                    if (displayImg === "showThreeImg") {
                                        return (
                                            <div className="boxItem showThreeImg" key={idx}>
                                                <h5>{threeImg.boxHeading}</h5>
                                                <ul>
                                                    {
                                                        threeImg.subCategory.map((threeContent, j) => {
                                                            return (
                                                                <li className="item" key={j}>
                                                                    <Link href="#">
                                                                        <Image src={threeContent.mediaFilePath} alt={threeContent.mediaFileName} />
                                                                        <p>{threeContent.name}</p>
                                                                    </Link>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                                <Link href="#" className="viewMorebtn"><span className="viewMoreLink">View More</span></Link>
                                            </div>
                                        )
                                    }
                                })
                            }

                            {
                                mainElem.single_Image.map((singleImg, ie) => {
                                    if (displayImg === "simgleImg") {
                                        return (
                                            <div className="boxItem singleImg" key={ie}>
                                                <h5>{singleImg.boxHeading}</h5>
                                                <ul>
                                                    {
                                                        singleImg.subCategory.map((img, x) => {
                                                            return (
                                                                <li className="item">
                                                                    <Link href="#">
                                                                        <Image src={img.mediaFilePath} alt={img.mediaFileName} />
                                                                    </Link>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                                <Link href="#" className="viewMorebtn"><span className="viewMoreLink">View More</span></Link>
                                            </div>
                                        )
                                    }
                                })
                            }

                            {
                                mainElem.twoImages.map((twoImg, img) => {
                                    if(displayImg === "two") {
                                        return (
                                        <div className="boxItem twoImg" key={img}>
                                            <h5>{twoImg.boxHeading}</h5>
                                            <ul>
                                                {
                                                    twoImg.subCategory.map((subtwoImg, z) => {
                                                        return (
                                                            <li className="item" key={z}>
                                                                <Link href="#">
                                                                    <Image src={subtwoImg.mediaFilePath} alt={subtwoImg.mediaFileName} />
                                                                </Link>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                            <Link href="#" className="viewMorebtn"><span className="viewMoreLink">View More</span></Link>
                                        </div>
                                    )
                                    }
                                })
                            }

                        </div>
                    })
                }
            </div> */}
    </div>
  );
}

export default Productdisplay;
