import { createContext, useState } from 'react';
import '../styles/styles.scss';
import { appWithTranslation } from "next-i18next";
import Head from 'next/head'
export const CartContext = createContext();
const MyApp = ({ Component, pageProps,resData }) => {
      console.log(resData);
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
        <Head>
        <title>JAMALII</title>
      </Head>
      <Component {...pageProps} />
    </CartContext.Provider>
  );
};

// export  const getStaticProps= async()=> {
//   // Fetch data from external API
//   const res = await fetch("https://staging.xprestores.com/api/category/list")
//   const data = await res.json()
//   const resData=data.results
//   console.log(resData);
//   // Pass data to the page via props
//   return { props: { resData } }
// }

export default appWithTranslation(MyApp);
