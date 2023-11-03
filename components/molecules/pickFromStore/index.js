import React from 'react';

const index = () => {
    return (
        <div className="store-address"  aria-hidden={isShown !=='pickup' ? true : false}>
            <div className="pickup-address">
                <div className="address-details">
                    <div className="address">
                        <h4><FaMapMarkerAlt/> Collection from Summera Jewels Shop</h4>
                        <ul>
                            <li>Shop No. 10, Rizvi Mahal,</li>
                            <li>R K Patkar Road - Water Field Road,</li>
                            <li>Next to Bhabha Hospital, Bandra (W),</li>
                            <li>Mumbai 400 050.</li>
                        </ul>
                    </div>
                    <div className="store-time">
                        <h4><FaClock /> Store Time</h4>
                        <span>11 AM to 8 PM</span>
                    </div>
                    <div className="call">
                        <h4><FaMobileAlt/> Call</h4>
                        <span>77700 07841, 82918 90911, 022-35080525</span>
                    </div>
                </div>

            <div className="map">
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7542.246188475796!2d72.82723252664725!3d19.058324789164015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sShop%20No.%2010%2C%20Rizvi%20Mahal%2C%20%20R%20K%20Patkar%20Road%20-%20Water%20Field%20Road%2C%20%20Next%20to%20Bhabha%20Hospital%2C%20Bandra%20(W)%2C%20%20Mumbai%20400%20050.!5e0!3m2!1sen!2sin!4v1663930993449!5m2!1sen!2sin"
                width="500" height="250" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            </div>
        </div>
    )
}


export default index;