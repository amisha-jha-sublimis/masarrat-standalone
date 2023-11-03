import { useEffect } from 'react';
import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/molecules/header';
import Footer from '../components/molecules/footer';
import { useRouter } from 'next/router';
import AddtoCart from '../components/molecules/addtocart';
import { removeLocal, sessionId } from '../components/helper/method';
import { loadState } from '../utils/localstorage';


export default ({ children, title = 'Masarrat Ecommerce' }) => {
  const router = useRouter();


  

//   const checkTokenExpiration = () => {
//     let accessToken = null;
//     const expiration = loadState("expInToken")
//     const token = loadState("token")
//     const expirationDate = expiration * 1000;

//     if (token && expiration && Date.now() < expirationDate) {
//       accessToken = token;
//       return accessToken;
//     } else {
//       removeLocal("user")
//       removeLocal("token")
//     }
//   }

//   useEffect(() =>{
//     let html = "";
//     if(!isActive){
//         html = document.querySelector("html");
//         html.classList.add("overflow-hidden")
//     }else{
//         html = document.querySelector("html");
//         html.classList.remove("overflow-hidden");
//     }
// },[isActive])

  return (
    <div className="app-main">
      <Head>
        <title>{ title }</title>
      </Head>
      
      <Header />
      <div className={`bg-overlay ${""}`}></div>
        <main className={'main-page'}>
          { children }
      </main>

      <Footer />
 
    </div>
  )
}