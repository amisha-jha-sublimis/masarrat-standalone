import Head from 'next/head';
import Header from '../components/molecules/header';
import Footer from '../components/molecules/footer';


export default ({ children }) => {
  // const pathname = router.pathname;

  return (
    <div className="app-main">
      <Head>
        <title>Page not found </title>
      </Head>

      <Header isErrorPage />

      <main className={'main-page'}>
        {children}
      </main>

      <Footer isErrorPage />
    </div>
  )
}