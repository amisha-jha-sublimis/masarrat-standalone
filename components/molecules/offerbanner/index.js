import Image from 'next/image';

function OfferBanner({offerData}){
    return(
        offerData.map((item, index) => 
        <div className="add-banner" key={index}>
            <div className="add-bannerimage">
                <figure>
                    <Image src={item.imgsrc} alt={item.alt}></Image>
                </figure>
                <figcaption>
                    <h4>{item.productname}</h4>
                    <h2>{item.sale}</h2>
                    <h6>{item.discount}</h6>
                    <span className='rotate'>{item.upto}</span>
                    <a className="btn btn-primary" href="#"><span>Shop Now</span></a>
                </figcaption>
            </div>
        </div>
        )
    )
}

export default OfferBanner;