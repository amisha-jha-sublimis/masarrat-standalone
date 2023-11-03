import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import Review from '../reviewCart';


const AddtoCart = (props) => {

    const dispatch = useDispatch();

    const { cart, summary } = useSelector((state) => state.cart)

    // console.log("Summary ddata dispaching", summary)

    return (
        <nav className={`cart-nav ${props.isActive ? "" : "site-nav--open"}`}>
            <div className="topheader">
                <h2>My Cart </h2>
                <button type="button" className="btn-close" aria-label="Close" onClick={() => dispatch(viewCartAction())}></button>
            </div>
            <div className="cart-body">
                <ul className="product-details">
                    <Review Cartdata={cart} />
                </ul>
                {
                    cart ? (<div className="cart-footer">
                        <div className="cart-button">
                            <Link href={'#'}></Link>
                           
                        </div>
                        <div className="total-prize">
                            {summary !== null && summary !== undefined ? summary.afterDisTotal !== null ? `₹ ${summary.afterDisTotal}` : "" : null}
                        </div>
                    </div>)
                        : null
                }

            </div>
        </nav>
    )
}

export default AddtoCart;