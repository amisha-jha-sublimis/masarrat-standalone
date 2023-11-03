import Categories_data from '../../molecules/categories/categoriesdata';
import Link from "next/link";
import Image from 'next/image';

function All_categories_dropdown() {
    return(
        Categories_data.map((item, index ) => 
            <li key={index}>
                <Link href="/">
                    <Image src={item.imgScr} width={35} height={25} alt={item.name} title={item.name} className="categories-img"></Image>
                    <span>{item.name}</span>
                </Link>
            </li>             
        )
    )
}

export default All_categories_dropdown