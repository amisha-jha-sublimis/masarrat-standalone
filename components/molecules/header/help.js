import Image from 'next/image';
import Link from 'next/link';
import mobile from '../../../assets/images/help/mobile.svg';
import telephone from '../../../assets/images/help/telephone.svg';
import mail from '../../../assets/images/help/mail.svg';
import faqs from '../../../assets/images/help/faqs.svg';
import contact from '../../../assets/images/help/contact.svg';

function Help() {
    return (

    <div className="help">
        <button className="dropbtn">Help</button>
        <ul className="dropdown-content">

            <li>
                <div className="dropdown">
                    <ul className="dropdown-menu d-block">
                    
                        <li>
                            <div className="icon">
                                <Image src={mobile} alt="Mobile" title="Mobile"></Image>
                            </div>
                            <div className="details">
                                <Link className="btn" href="tel:9167028213"> 91670 28213 </Link>
                                <Link className="btn" href="tel:9167028214"> 91670 28214 </Link>
                                <Link className="btn" href="tel:91670 28215"> 91670 28215 </Link>
                                <Link className="btn" href="tel:91670 28216"> 91670 28216 </Link>
                            </div>
                        </li>

                        <li>
                            <div className="icon">
                                <Image src={telephone} alt="Telephone" title="Telephone"></Image>
                            </div>
                            <div className="details">
                                <Link className="btn" href="tel:02229200363"> 022 - 29200363 </Link>
                                <Link className="btn" href="tel:02229202469"> 022 - 29202469 </Link>
                            </div>
                        </li>

                        <li>
                            <div className="icon">
                                <Image src={mail} alt="Email" title="Email"></Image>
                            </div>
                            <div className="details">
                                <Link className="btn" href="mailto:sales@masarrat.in"> sales@masarrat.in </Link>
                            </div>
                        </li>

                        <hr />

                        <li>
                            <div className="icon">
                                <Image src={faqs} alt="FAQs" title="FAQs"></Image>
                            </div>
                            <div className="details">
                                <Link className="btn" href="/faqs"> FAQs </Link>
                            </div>
                        </li>

                        <li>
                            <div className="icon">
                                <Image src={contact} alt="Contact" title="Contact"></Image>
                            </div>
                            <div className="details">
                                <Link className="btn" href="/contact"> Contact </Link>
                            </div>
                        </li>

                    </ul>
                </div> 
            </li>

        </ul>
    </div>

    );
}

export default Help;                