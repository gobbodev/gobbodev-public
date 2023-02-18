import * as S from "./styles";
import NextLink from "next/link";

import React from "react";
import { useContext, useState, useRef, useEffect} from "react";
import MyContext from "components/contexts/todo";




export default function Header() {
  const [, setIsOpen, renderName, setName, , , setIsMobile, backIn, setBackIn] = useContext(MyContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [navClose, setNavClose] = useState(false);
  
  const menuRef = useRef<HTMLInputElement>();

 
  useEffect(() => {
    const mobileTrigger = () =>{
      setIsMobile(true);
      /*console.log(aa) // o console é executado na primeira vez que o botao é clickado e retorna false, pq?*/;
      menuRef.current.removeEventListener('click', mobileTrigger)

    }
    menuRef.current.addEventListener('click', mobileTrigger)
    
  }, []);
  
  return (
    <S.Header>
      <nav style={menuOpen && !navClose ? { visibility:"visible", opacity: 1, zIndex: `${!backIn ? 99 : 0 }` }  : null}>
        <NextLink
          className="contact"
          href=""
          onClick={() => {
            setIsOpen(true), setName("Contact"), setNavClose(!navClose);
          }}
        >
          contato
        </NextLink>
        <NextLink
          className="tecs"
          href=""
          onClick={() => {
            setIsOpen(true), setName("Tecs"), setNavClose(!navClose);
          }}
        >
          tecs
        </NextLink>
        <NextLink
          className="project"
          href=""
          onClick={() => {
            setIsOpen(true), setName("Project"), setNavClose(!navClose);
          }}
        >
          projeto
        </NextLink>
        <NextLink
          className="portfolio"
          href=""
          onClick={() => {
            setIsOpen(true), setName("Portfolio"), setNavClose(!navClose);
          }}
        >
          portfolio
        </NextLink>
      </nav>
      <div className="menu-mobile">
        
      <div className="backMin-container" style={ menuOpen ? {visibility:"visible", opacity: 1} : null}>
          <label htmlFor="back">
              <input ref={menuRef} onClick={renderName != "" ? () => {setNavClose(false), setName("")} : () =>{} } type="checkbox" id="back" />
              <span style={ renderName != "" ? { transformOrigin: "bottom", transform: "rotatez(-25deg)", marginTop: "-4px"} : null} ></span>
              <span style={ renderName != "" ? { opacity: 1, visibility: "visible", transformOrigin: "top", transform: "rotatez(25deg)", marginTop: "-4px"} : null}></span>
          </label>
        </div>

        <div className="openClose-container">
          <label htmlFor="open">
            <input ref={menuRef} onClick={() => {setMenuOpen(!menuOpen), setNavClose(false), setName("")}} type="checkbox" id="open" />
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className="background-menu" style={menuOpen ? { visibility:"visible", opacity: 1, zIndex: `${!backIn ? 98 : -1 }`} : null}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </S.Header>
  );
}
