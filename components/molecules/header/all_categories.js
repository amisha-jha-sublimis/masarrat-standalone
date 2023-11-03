import { useEffect, useState } from "react"
import Link from "next/link";
import Image from 'next/image';
import acrylic_furniture from '../../../assets/images/categories/acrylic_furniture.svg';
import Luxurylabel from '../luxurylabel';
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";


function All_categories() {
    const router = useRouter();

    // const [sub, setSub] = useState(false)
    const [catSlug, setCatSlug] = useState('')

    const handleShowSubCategory = (slug) => {
        setCatSlug(slug)
    }


    return (
        <>
            <div className="all_categories">
                <button className="dropbtn" onMouseOver={() => setCatSlug("")}><i className="btn-hamburger"><span></span></i> <span >All Categories</span></button>
                <ul className={`dropdown-content`}>
                    <li>
                        <div className="dropdown">
                            
                        </div>
                    </li>
                </ul>
            </div>

            {/* <div className={`sub-menu`} onMouseLeave={() => handleMouseLeave()} >
                <ul className={`sub-dropdown-menu ${sub ? "d-block" : ""}`}>
                    {
                        subCategory.map(sub => (
                            <li key={sub.slug}>
                                <Link href={`/productlisting/${catSlug}/${sub.slug}`} className="dropdown-item">{sub.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div> */}
        </>
    );
}

export default All_categories;