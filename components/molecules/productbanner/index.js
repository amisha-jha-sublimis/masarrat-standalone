import Image from 'next/image';
import Add from '../../../assets/images/kitchen.jpg';

function ProductBanner () {
    return(
        <div className="add-banner-one">
            <div className="add-bannerImage-one">
                <figure>
                    <Image src={Add} alt="The Modular Kitchen Storage"></Image>
                </figure>
                <div className='container'>
                    <figcaption>
                        <div className='addData'>
                            <h2>The Modular Kitchen Storage</h2>
                            <h4><span>Starting</span> ₹ 5999*</h4>
                            <a className="btn btn-primary" href="#"><span>Shop Now</span></a>                
                        </div>
                        <p>T&C Apply</p>
                    </figcaption>
                </div>
            </div>
        </div>
    )
}

export default ProductBanner;