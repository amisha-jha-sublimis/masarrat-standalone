import Link from "next/link";
import loadingimage from '../../../assets/images/header/masarratlogo.png';

function Categories({categoriesData}) {

    return(
        Object.keys(categoriesData).map((key) =>{
            return<div className="col card-div" key={categoriesData[key].id}>
            <div className="card shadow">
                <Link href={`products/${categoriesData[key].slug}`}>
                    {/* <img src={categoriesData[key].media ? categoriesData[key].media : loadingimage.src} alt={categoriesData[key].name} className="categories-img" /> */}
                    <img src={categoriesData[key].media } alt={categoriesData[key].name} className="categories-img" />
                    <span>{[key]}</span>
                </Link>
            </div>
        </div>
        })
    )
}

export default Categories