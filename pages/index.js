import { useEffect, useState } from 'react';
import Link from 'next/link';
import Layout from '../layouts/Main';



const HomePage = () => {


  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: "10px",

    fontFamily: "Arial",
  };

  const styles = {
    color: "DodgerBlue",
    // backgroundColor: "LightBlue",
    padding: "5px",
    fontFamily: "Sans-serif",
    alignItems: "center",
    margin: "10px",

    fontFamily: "Arial",
  }

  const style2 = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: "15px",
    fontFamily: "Arial",

    color: "white",
    margin: "10px",
    backgroundColor: "Coral",
  }

  return (
    <Layout>
      <div className='heading'>
        <h1 style={mystyle}>
          HOME PAGE
        </h1>
        <br>
        </br>
        <p style={styles}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged.
          It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with
          desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.

        </p>

        <Link href="/contact" className='logo' style={style2}>
          Contact Us
        </Link>

      </div>
    </Layout>
  )
}

export default HomePage