// import Features_data from './featuresdata';
import Link from "next/link";
import Image from 'next/image';

function Features({featuresData}) {
    return(
        featuresData.map((item, index ) => 
            <Link href="/" key={index}>
                <Image src={item.imgScr} alt={item.name} className="features-img"></Image>
                <span>{item.name}</span>
            </Link>
        )
    )
}

export default Features