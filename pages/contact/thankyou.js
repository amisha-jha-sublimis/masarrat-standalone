import Image from "next/image";
import React from "react";
import Layout from '../../layouts/standalon';
import Link from "next/link";
import bgOverlay from '../../assets/images/overlayBg.png';
// Images import ______________________________
import prayingIcon from '../../assets/images/praying.svg';


const ThankYouPg = () => {
    return (
        <Layout>
            <div className="thankyouSec">
                <div className="pagesLink"><Link href="#">Home / </Link><Link href="#" className="activePg">Thank You</Link></div>
                <div className="bg-ovelay"><Image src={bgOverlay}></Image></div>
                <div className="mainSec">
                    <Image src={prayingIcon}></Image>
                    <h5>Thank You</h5>
                    <p>Your request has been sent successfully.
                        Someone will be in connect with you shortly.</p>

                    <Link href="/"><button type="button">Back to Home</button></Link>
                </div>
            </div>
        </Layout>
    )
}

export default ThankYouPg