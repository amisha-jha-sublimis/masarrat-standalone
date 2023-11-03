import LayoutError from '../layouts/404';
import Image from "next/image";
import Link from 'next/link';
import error_img from '../assets/images/404_error.svg';

const ErrorPage = () => (
  <LayoutError>
    <section className="error-page">
        <div className="container">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                    <li className="breadcrumb-item active">Error</li>
                </ol>
            </nav>

            <ul className="error">
                <li>
                    <div className="img">
                        <Image src={error_img}  alt="404 Error" title="404 Error" />
                    </div>
                </li>
                <li>
                    <div className="content">
                        <h3>Oops!</h3>
                        <p className="not-found">Error 404 - Page Not Found</p>
                        <p className="check">Following are few easy links you may want to check</p>

                        <div className="details">
                            <Link className="btn" href="/"> Home </Link>
                            <Link className="btn" href="/"> All Categories</Link>
                            <Link className="btn" href="/"> Offers</Link>
                            <Link className="btn" href="/"> Track Order</Link>
                            <Link className="btn" href="/"> Become a Franchisee</Link>
                        </div>

                        <hr />

                        <h5>Need Help?</h5>

                        <ul className="help">
                            <li>
                                <h6>Call Us:</h6>
                                <Link className="btn" href="tel:9167028213"> 9167028213 / 14 / 15 / 16 </Link>
                            </li>
                            <li>
                                <h6>Email Us:</h6>
                                <Link className="btn" href="mailto:sales@masarrat.in"> sales@masarrat.in </Link>
                            </li>
                        </ul>

                    </div>
                </li>
            </ul>

        </div>
    </section>
  </LayoutError>
)

export default ErrorPage