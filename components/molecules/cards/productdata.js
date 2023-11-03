import newshoparrival1 from '../../../assets/images/carsouselImg/product1.png';
import newshoparrival2 from '../../../assets/images/carsouselImg/product2.png';
import newshoparrival3 from '../../../assets/images/carsouselImg/product3.png';
import newshoparrival4 from '../../../assets/images/carsouselImg/product4.png';
import newshoparrival5 from '../../../assets/images/carsouselImg/product5.png';
import newshoparrival6 from '../../../assets/images/carsouselImg/newshoparrival1.png';
import newshoparrival7 from '../../../assets/images/carsouselImg/newshoparrival2.png';
import newshoparrival8 from '../../../assets/images/carsouselImg/newshoparrival3.png';
import newshoparrival9 from '../../../assets/images/carsouselImg/newshoparrival4.png';
import newshoparrival10 from '../../../assets/images/carsouselImg/newshoparrival5.png';
import Image from 'next/image';

const Sdata = [
  {id:1, src: newshoparrival1, title: "newshoparrival 1" , alt: "newshoparrival1", price: "500",},
  {id:2, src: newshoparrival2, title: "newshoparrival 2" , alt: "newshoparrival1", price: "5000" },
  {id:3, src: newshoparrival3, title: "newshoparrival 3" , alt: "newshoparrival1", price: "1000" },
  {id:4, src: newshoparrival4, title: "newshoparrival 4" , alt: "newshoparrival1", price: "5770" },
  {id:5, src: newshoparrival5, title: "newshoparrival 5" , alt: "newshoparrival1", price: "5440" },
  {id:6, src: newshoparrival6, title: "newshoparrival 6" , alt: "newshoparrival1", price: "5440" },
  {id:7, src: newshoparrival7, title: "newshoparrival 7" , alt: "newshoparrival1", price: "5440" },
  {id:8, src: newshoparrival8, title: "newshoparrival 8" , alt: "newshoparrival1", price: "5440" },
  {id:9, src: newshoparrival9, title: "newshoparrival 9" , alt: "newshoparrival1", price: "5440" },
  {id:10, src: newshoparrival10, title: "newshoparrival 10" , alt: "newshoparrival1", price: "5440" }
] 

export default Sdata

export const sliderdata = [
  { id: 1, content: <Image src={newshoparrival1} alt="Item 1" /> },
  { id: 2, content: <Image src={newshoparrival2} alt="Item 2" /> },
  { id: 3, content: <Image src={newshoparrival3} alt="Item 3" /> },
  { id: 4, content: <Image src={newshoparrival4} alt="Item 4" /> },
  { id: 5, content: <Image src={newshoparrival5} alt="Item 5" /> }
];

export const controls = ["next", "priveous"]

export const Content = [
  {
    "id": "1",
    "slug_name": "prodcut_title_slugname",
    "name": "Product1",
    "code": "M-CT9",
    "price": "500",
    "currency": "Rs",
    "cover_image": newshoparrival1,
    "wishlist": false,
    "units": "1",
    "discount": "5",
    "priceofDiscount": "",
    "unitOfPurchase": "1",
    "priceofProduct": "500",
    "size": "H 13 x W 35 x L 24",
    "luxury":true,
    "media": [
      newshoparrival1,
      newshoparrival2,
      newshoparrival3,
      newshoparrival4
    ]
  },
  {
    "id": "2",
    "slug_name": "prodcut_title_slugname",
    "name": "Product2",
    "code": "M-CT8",
    "price": "5000",
    "currency": "Rs",
    "cover_image": newshoparrival2,
    "wishlist": false,
    "units": "1",
    "discount": "10",
    "priceofDiscount": "",
    "unitOfPurchase": "1",
    "priceofProduct": "5000",
    "size": "H 13 x W 35 x L 24",
    "media": [
      newshoparrival2,
      newshoparrival1,
      newshoparrival3,
      newshoparrival4
      ]
  },
  {
    "id": "3",
    "slug_name": "prodcut_title_slugname",
    "name": "Product3",
    "code": "0PRD3",
    "price": "1500",
    "currency": "Rs",
    "cover_image": newshoparrival3,
    "wishlist": false,
    "units": "1",
    "discount": "10",
    "priceofDiscount": "",
    "unitOfPurchase": "1",
    "priceofProduct": "1500",
    "size": "H 13 x W 35 x L 24",
    "media": [
      newshoparrival3,
      newshoparrival2,
      newshoparrival1,
      newshoparrival4
      ]
  },
  {
    "id": "4",
    "slug_name": "prodcut_title_slugname",
    "name": "Product4",
    "code": "0PRD4",
    "price": "1800",
    "currency": "Rs",
    "cover_image": newshoparrival4,
    "wishlist": false,
    "units": "1",
    "discount": "10",
    "priceofDiscount": "",
    "unitOfPurchase": "1",
    "priceofProduct": "1800",
    "size": "H 13 x W 35 x L 24",
    "luxury":true,
    "media": [
      newshoparrival4,
      newshoparrival3,
      newshoparrival2,
      newshoparrival1
      ]
  },
  {
    "id": "5",
    "slug_name": "prodcut_title_slugname",
    "name": "Product5",
    "code": "0PRD5",
    "price": "2000",
    "currency": "Rs",
    "cover_image": newshoparrival5,
    "wishlist": false,
    "units": "1",
    "discount": "10",
    "priceofDiscount": "",
    "unitOfPurchase": "1",
    "priceofProduct": "2000",
    "size": "H 13 x W 35 x L 24",
    "media": [
      newshoparrival5,
      newshoparrival7,
      newshoparrival8,
      newshoparrival9
      ]
  },
  {
    "id": "6",
    "slug_name": "prodcut_title_slugname",
    "name": "Product6",
    "code": "0PRD6",
    "price": "1900",
    "currency": "Rs",
    "cover_image": newshoparrival6,
    "wishlist": false,
    "units": "1",
    "discount": "10",
    "priceofDiscount": "",
    "unitOfPurchase": "1",
    "priceofProduct": "1900",
    "size": "H 13 x W 35 x L 24",
    "luxury":true,
    "media": [
      newshoparrival6,
      newshoparrival7,
      newshoparrival8,
      newshoparrival9
      ]
  },
  {
    "id": "7",
    "slug_name": "prodcut_title_slugname",
    "name": "Product7",
    "code": "0PRD7",
    "price": "5200",
    "currency": "Rs",
    "cover_image": newshoparrival7,
    "wishlist": false,
    "units": "1",
    "discount": "10",
    "priceofDiscount": "",
    "unitOfPurchase": "1",
    "priceofProduct": "5200",
    "size": "H 13 x W 35 x L 24",
    "media": [
      newshoparrival7,
      newshoparrival8,
      newshoparrival6,
      newshoparrival9
      ]
  },
  {
    "id": "8",
    "slug_name": "prodcut_title_slugname",
    "name": "Product8",
    "code": "0PRD8",
    "price": "5000",
    "currency": "Rs",
    "cover_image": newshoparrival8,
    "wishlist": false,
    "units": "1",
    "discount": "10",
    "priceofDiscount": "",
    "unitOfPurchase": "1",
    "priceofProduct": "5000",
    "size": "H 13 x W 35 x L 24",
    "media": [
      newshoparrival8,
      newshoparrival7,
      newshoparrival6,
      newshoparrival9
      ]
  },
  {
    "id": "9",
    "slug_name": "prodcut_title_slugname",
    "name": "Product9",
    "code": "0PRD9",
    "price": "5100",
    "currency": "Rs",
    "cover_image": newshoparrival9,
    "wishlist": false,
    "units": "1",
    "discount": "10",
    "priceofDiscount": "",
    "unitOfPurchase": "1",
    "priceofProduct": "5100",
    "size": "H 13 x W 35 x L 24",
    "luxury":true,
    "media": [
      newshoparrival9,
      newshoparrival8,
      newshoparrival7,
      newshoparrival6,
      ]
  },
  {
    "id": "10",
    "slug_name": "prodcut_title_slugname",
    "name": "Product10",
    "code": "0PRD10",
    "price": "3000",
    "currency": "Rs",
    "cover_image": newshoparrival10,
    "wishlist": false,
    "units": "1",
    "discount": "10",
    "priceofDiscount": "",
    "unitOfPurchase": "1",
    "priceofProduct": "3000",
    "size": "H 13 x W 35 x L 24",
    "luxury":true,
    "media": [
      newshoparrival10,
      newshoparrival8,
      newshoparrival7,
      newshoparrival6,
      ]
  },
]