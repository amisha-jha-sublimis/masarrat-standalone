import Link from "next/link";
import {FaQuoteLeft} from 'react-icons/fa';
import tdata from '../../molecules/testimonial/textData';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Testimonial () {
    return(
          <Carousel
          showArrows={false}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={2000}
          >
          {tdata.map((item, index) => 
           <div className="testimonalInfo" key={index}>
                <div className="container">
                    <div className="testi-icon"><FaQuoteLeft /></div>   
                    <div className="inner-wrapper">
                        <p className="content">{item.text}</p>
                        <p className="title">{item.name} <span>{item.place}</span></p>
                    </div>
                    <Link href="#" className="btn btn-primary"><span>Read All Customer Says</span></Link>
                </div>
            </div>
          )}
        </Carousel>
)}
export default Testimonial;
