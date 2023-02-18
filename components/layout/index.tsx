import BannerContainer from "./bannerContainer";

import Head from "next/head";

import Header from "./header";
import Left from "./left";
import Center from "./center";
import MyContext from "components/contexts/todo";

import { useState, useRef } from "react";


export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [backIn, setBackIn] = useState(false);

  return (
    <MyContext.Provider value={[ isOpen, setIsOpen, name, setName, audioRef, isMobile, setIsMobile, backIn, setBackIn ]}> 
      <BannerContainer>
         <Head>
           <meta name="viewport" content="initial-scale=1.0, width=device-width" />
         </Head>
         <audio ref={audioRef} loop src="/audio/a.mp3" />
         <Header/>
         <Left />
         <Center/>
      </BannerContainer>
    </MyContext.Provider>
  );
  /*Provider disponibiliza os valores para as crianças do MyContext :)*/
}
