import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import Add from '../../../assets/images/slider-bg.jpg';

export default function ImageCarousel({ images }) {
  const settings = {
    infinite: true,
    dots: false,
    slidesToShow: 1,
    arrows: true,
    autoplay: true,
    slidesToScroll: 1,
    lazyLoad: true
  };
  return (
    <section className="sliderBg">
      <figure>
          <Image src={Add} alt="The Modular Kitchen Storage"></Image>
      </figure>
      <div className="container">
        <Slider {...settings}>
          {images.map((item) => (
          <div key={item.id} className='categories-img'>
            <div className="dsc_sec">
              <span className="txt_lbl">{item.label}</span>
              <h2>{item.heading}</h2>
              <p>{item.dsc}</p>
              <button>{item.btn}</button>
            </div>
            <div className="thumb_img">
              <Image src={item.thmbImg} alt={item.alt}></Image>
              <Image src={item.thmbImg2} alt={item.alt}></Image>
              <Image src={item.thmbImg3} alt={item.alt}></Image>
            </div>
          </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
