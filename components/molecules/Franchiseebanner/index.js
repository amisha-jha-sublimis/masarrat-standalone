import Image from 'next/image';
import Link from 'next/link';

function FranchiseeBanner({franchiseeData}){
    return(
        franchiseeData.map((item, index) => 
        <div className="banner" key={index}>
            <div className="bannerimage">
                <figure>
                    <Image src={item.imgsrc} alt={item.alt}></Image>
                </figure>
                <figcaption>
                    <h2></h2>
                    <p></p>
                    <Link className="btn btn-primary" href="#"><span>Register Now</span></Link>
                </figcaption>
            </div>
        </div>
        )
    )
}

export default FranchiseeBanner;