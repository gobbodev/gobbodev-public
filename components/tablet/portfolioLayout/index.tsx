import * as S from "./styles";

import NextImage from "next/image";
import NextLink from "next/link";

import { useContext } from "react";

import MyContext from "components/contexts/todo";

import Tablet from "..";

export default function Portfolio() {
  const [, , , , , isMobile] = useContext(MyContext);

  return !isMobile ?(
    <Tablet>
      <S.PortfolioLayout>
        <div className="container">
        
          <div className="projects">
            <div className="item">
              <NextImage className="thumb" src="/images/thumb_oplastic.gif"  alt="" width="300"   height="180" />
              <h3>OPlastic</h3>
              <div className="row-links">
                <NextLink target="_blank"  href="https://www.oplastic.ind.br/" >
                  <NextImage className="icon" src="/icons/website_icon_pink.png"  alt="" width="20"   height="20"/>
                </NextLink>
              </div>
            </div>
            <div className="item">
              <NextImage className="thumb" src="/images/thumb_gobbodev.gif"  alt="" width="300"   height="180" />
              <h3>gobbo.dev</h3>
              <div className="row-links">
                <NextLink target="_blank"  href="https://github.com/gobbodev/gobbodev-public" >
                  <NextImage className="icon" src="/icons/github_icon_pink.png"  alt="" width="20"   height="20"/>
                </NextLink>
              </div>
            </div>
          </div>
        </div>
      </S.PortfolioLayout>
    </Tablet>
  ) : (
    <S.PortfolioLayout>
        <div className="container">
        
          <div className="projects">
            <div className="item">
              <NextImage className="thumb" src="/images/thumb_oplastic.gif"  alt="" width="300"   height="180" />
              <h3>OPlastic</h3>
              <div className="row-links">
                <NextLink target="_blank"  href="https://www.oplastic.ind.br/" >
                  <NextImage className="icon" src="/icons/website_icon_pink.png"  alt="" width="20"   height="20"/>
                </NextLink>
              </div>
            </div>
            <div className="item">
              <NextImage className="thumb" src="/images/thumb_gobbodev.gif"  alt="" width="300"   height="180" />
              <h3>gobbo.dev</h3>
              <div className="row-links">
                <NextLink target="_blank"  href="https://github.com/gobbodev/gobbodev-public" >
                  <NextImage className="icon" src="/icons/github_icon_pink.png"  alt="" width="20"   height="20"/>
                </NextLink>
              </div>
            </div>
          </div>
        </div>
      </S.PortfolioLayout>
  );
}
