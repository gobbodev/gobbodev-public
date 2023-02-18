import Head from "next/head";
import { AppProps } from "next/app";

import "../styles/reset.css";


import { GlobalStyle } from "styles/global";

const App = ({ Component, pageProps }: AppProps) => {

    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <title>Gabriel Gobbo Developer</title>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=9" />
          <meta name="viewport" content="width=device-width, user-scalable=yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="keywords" content="gabriel, gabriel gobbo, gobbo, desenvolvedor web, front-end developer, programador, desenvolvedor react" />
          <meta name="description" content="Site do Desenvolvedor Web Gabriel Gobbo" />
          <meta property="og:title" content="Desenvolvedor Web Gabriel Gobbbo" />
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="URL" />
          <meta property="og:image" content="image" />
          <meta property="og:image:type" content="image/jpg" />
          <meta property="og:image:width" content="600" />
          <meta property="og:image:height" content="300" />
          <meta property="og:site_name" content="https://gobbo.dev" />
          <meta property="og:description" content="Site do Desenvolvedor Web Gabriel Gobbo" />
          <meta name="content-language" content="pt-br" />
          <meta name="rating" content="general" />
          <meta name="distribution" content="global" />
          <meta name="copyright" content="" />
          <meta name="author" content="Gabriel Gobbo" />
          <meta name="robots" content="index,follow,all" />
          <link rel="canonical" href="https://gobbo.dev" />
          <meta name="theme-color" content="#fff" />
      
          <meta name="application-name" content="&nbsp;" />
          <meta name="msapplication-TileColor" content="#" />
          
          
          
        </Head>

        <GlobalStyle />

        <Component {...pageProps} />
      </>
    );
};

export default App;


