import Image from "next/image";
import Link from "next/link";
import Productdata from '../twoProductDisplay/data'
// import opticalDisplays from '../../../assets/images/carsouselImg/opticalDisplays.png';

function Twoproductdisplay() {
    return (
        <div className="container">
            <div className="twoproductdisplay">
                {
                    Productdata.map((callHeading) => {
                        const setLength = callHeading.category.length
                        const setClass = []

                        if (setLength === 1) {
                            setClass.push("Wrapper productItem1");
                        } else if (setLength === 2) {
                            setClass.push("Wrapper productItem2");
                        }
                        else if (setLength === 3) {
                            setClass.push("Wrapper productItem3");
                        }
                        else if (setLength === 4) {
                            setClass.push("Wrapper productItem4");
                        }
                        else if (setLength === 5) {
                            setClass.push("Wrapper productItem5");
                        }
                        else if (setLength === 6) {
                            setClass.push("Wrapper productItem6");
                        }

                        return (
                            <div className={setClass}>
                                <h5>{callHeading.boxName}</h5>
                                <ul>
                                    {
                                        callHeading.category.map((callProduct, index) => {
                                            return (
                                                <li>
                                                    <Link href="#" className="productItem" key={index}>
                                                        <Image src={callProduct.productImg} />
                                                        <p>{callProduct.productName}</p>
                                                    </Link>
                                                </li>
                                            )
                                        },
                                        )
                                    }
                                </ul>
                                <Link href='#' className='viewMoreLink'>View More</Link>
                            </div>
                        )
                    },

                    )
                }
            </div>
        </div>
    )
}

export default Twoproductdisplay