import {Sora} from '@next/font/google'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Head from 'next/head';
import TopLeftImg from '../components/TopLeftImg'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
});

const Layout = ({children, pageTitle}) => {
  const title = pageTitle ? `${pageTitle} - Drgham Dakhol` : "Drgham Dakhol's Website";
  const description = "Here is a precise description of Drgham Dakhol's website.";
  const url = "https://drghamdakhol.vercel.app";
  const favicon = "/fav-icon.png";

  return (
      <>
          <Head>
          {/* Basic Meta */}
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="robots" content="index, follow" />
          <meta name="description" content={description} />

          {/* Open Graph (Social Media) */}
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Drgham Dakhol's Website" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:url" content={url} />

          <title>{title}</title>
          <link rel="icon" href={favicon} type="image/png" />
          </Head>
          <div className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}> 
            <TopLeftImg/>
            <Nav/>
            <Header/>
            {children}
          </div>
    </>  
  );
};

export default Layout;
