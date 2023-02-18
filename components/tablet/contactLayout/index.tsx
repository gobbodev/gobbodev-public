import * as S from "./styles";

import Tablet from "..";
import NextLink from "next/link";
import NextImage from "next/image";

import { useContext } from "react";
import MyContext from "components/contexts/todo";

export default function Contact() {
  const [, , , , , isMobile] = useContext(MyContext);

  return !isMobile ? (
    <Tablet>
      <S.ContactLayout>
        <div className="container">
          <div className="perfil">
            <h2>Perfil</h2>
            <div className="item">
              <NextImage
                src="/icons/linkedin_icon.png"
                alt=""
                width="22"
                height="22"
              ></NextImage>
              <NextLink
                target="_blank"
                href="https://www.linkedin.com/in/gobbodev/"
              >
                linkedin.com/in/gobbodev
              </NextLink>
            </div>
            <div className="item">
              <NextImage
                src="/icons/instagram_icon.png"
                alt=""
                width="22"
                height="22"
              ></NextImage>
              <NextLink target="_blank" href="https://www.instagram.com/gabriel.zgtt/">
                instagram.com/gabriel.zgtt
              </NextLink>
            </div>
            <div className="item">
              <NextImage
                src="/icons/github_icon.png"
                alt=""
                width="22"
                height="22"
              ></NextImage>
              <NextLink target="_blank" href="https://github.com/gobbodev">
                github.com/gobbodev
              </NextLink>
            </div>
          </div>
          <div className="contatos">
            <h2>Meios de Contato</h2>
            <div className="item">
              <NextImage
                src="/icons/whatsapp_icon.png"
                alt=""
                width="22"
                height="22"
              ></NextImage>
              <NextLink target="_blank" href="https://wa.me/5543988541802">
              +55 (43) 98854-1802
              </NextLink>
            </div>
            <div className="item">
              <NextImage
                src="/icons/discord_icon.png"
                alt=""
                width="22"
                height="22"
              ></NextImage>
              <p>gobbo#1540</p>
            </div>
            <div className="item">
              <NextImage
                src="/icons/mail_icon.png"
                alt=""
                width="22"
                height="24"
              ></NextImage>
              <NextLink target="_blank" href="mailto:gobbodev@proton.me">
                gobbodev@proton.me
              </NextLink>
            </div>
          </div>
        </div>
      </S.ContactLayout>
    </Tablet>
  ) : (
      <S.ContactLayout>
        <div className="container">
          <div className="perfil">
            <h2>Perfil</h2>
            <div className="item">
              <NextImage
                src="/icons/linkedin_icon.png"
                alt=""
                width="22"
                height="22"
              ></NextImage>
              <NextLink
                target="_blank"
                href="https://www.linkedin.com/in/gobbodev/"
              >
                linkedin.com/in/gobbodev
              </NextLink>
            </div>
            <div className="item">
              <NextImage
                src="/icons/instagram_icon.png"
                alt=""
                width="22"
                height="22"
              ></NextImage>
              <NextLink target="_blank" href="https://www.instagram.com/gabriel.zgtt/">
              instagram.com/gabriel.zgtt
              </NextLink>
            </div>
            <div className="item">
              <NextImage
                src="/icons/github_icon.png"
                alt=""
                width="22"
                height="22"
              ></NextImage>
              <NextLink target="_blank" href="https://github.com/gobbodev">
                github.com/gobbodev
              </NextLink>
            </div>
          </div>
          <div className="contatos">
            <h2>Meios de Contato</h2>
            <div className="item">
              <NextImage
                src="/icons/whatsapp_icon.png"
                alt=""
                width="22"
                height="22"
              ></NextImage>
              <NextLink target="_blank" href="https://wa.me/5543988541802">
                +55 (43) 98854-1802
              </NextLink>
            </div>
            <div className="item">
              <NextImage
                src="/icons/discord_icon.png"
                alt=""
                width="22"
                height="22"
              ></NextImage>
              <p>gobbo#1540</p>
            </div>
            <div className="item">
              <NextImage
                src="/icons/mail_icon.png"
                alt=""
                width="22"
                height="24"
              ></NextImage>
              <NextLink target="_blank" href="mailto:gobbodev@proton.me">
                gobbodev@proton.me
              </NextLink>
            </div>
          </div>
        </div>
      </S.ContactLayout>
  );
}
