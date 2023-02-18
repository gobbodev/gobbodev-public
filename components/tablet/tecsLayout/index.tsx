import * as S from "./styles";

import Tablet from "..";
import NextLink from "next/link";
import NextImage from "next/image";

import { useContext } from "react";
import MyContext from "components/contexts/todo";
/* da pra tirar a div tecs jogar o h2 pra fora e usar o container como ela */
export default function Tecs() {
  const [, , , , , isMobile] = useContext(MyContext);

  return !isMobile ? (
    <Tablet>
      <S.TecsLayout>
        <div className="container">
          <h2>Tecnologias</h2>
          <div className="tecs">
            <div className="item">
              <NextImage
                src="/icons/c_sharp_icon.png"
                alt=""
                width="30"
                height="30"
              ></NextImage>
              <NextLink
                target="_blank"
                href="https://www.linkedin.com/in/gobbodev/"
              >
                <span>C# -</span> 1 ano de experiência
              </NextLink>
            </div>
            <div className="item">
              <NextImage
                src="/icons/typescript_icon.png"
                alt=""
                width="30"
                height="30"
              ></NextImage>
              <NextLink
                target="_blank"
                href="https://www.linkedin.com/in/gobbodev/"
              >
                <span>Typescript -</span> 6 meses de experiência
              </NextLink>
            </div>
            <div className="item">
              <NextImage
                src="/icons/javascript_icon.png"
                alt=""
                width="30"
                height="30"
              ></NextImage>
              <NextLink
                target="_blank"
                href="https://www.linkedin.com/in/gobbodev/"
              >
                <span>JavaScript -</span> 2 meses de experiência
              </NextLink>
            </div>
            <div className="item">
              <NextImage
                src="/icons/git_icon.png"
                alt=""
                width="30"
                height="30"
              ></NextImage>
              <NextLink
                target="_blank"
                href="https://www.linkedin.com/in/gobbodev/"
              >
                <span>Git -</span> 4 meses de experiência
              </NextLink>
            </div>
            <div className="item">
              <NextImage
                src="/icons/html_icon.png"
                alt=""
                width="30"
                height="30"
              ></NextImage>
              <NextImage
                src="/icons/css_icon.png"
                alt=""
                width="30"
                height="30"
              ></NextImage>
              <NextLink
                target="_blank"
                href="https://www.linkedin.com/in/gobbodev/"
              >
                <span>HTML & CSS -</span> 4 meses de experiência
              </NextLink>
            </div>
            <div className="item">
              <NextImage
                src="/icons/react_icon.png"
                alt=""
                width="30"
                height="30"
              ></NextImage>
              <NextLink
                target="_blank"
                href="https://www.linkedin.com/in/gobbodev/"
              >
                <span>React -</span> 4 meses de experiência
              </NextLink>
            </div>
            <div className="item">
              <NextImage
                src="/icons/react_icon.png"
                alt=""
                width="30"
                height="30"
              ></NextImage>
              <NextLink
                target="_blank"
                href="https://www.linkedin.com/in/gobbodev/"
              >
                <span>React Native -</span> 4 meses de experiência
              </NextLink>
            </div>
          </div>
        </div>
      </S.TecsLayout>
    </Tablet>
  ) : (
    <S.TecsLayout>
      <div className="container">
        <h2>Tecnologias</h2>
        <div className="tecs">
          <div className="item">
            <NextImage
              src="/icons/c_sharp_icon.png"
              alt=""
              width="30"
              height="30"
            ></NextImage>
            <NextLink
              target="_blank"
              href="https://www.linkedin.com/in/gobbodev/"
            >
              <span>C# -</span> 1 ano de experiência
            </NextLink>
          </div>
          <div className="item">
            <NextImage
              src="/icons/typescript_icon.png"
              alt=""
              width="30"
              height="30"
            ></NextImage>
            <NextLink
              target="_blank"
              href="https://www.linkedin.com/in/gobbodev/"
            >
              <span>Typescript -</span> 6 meses de experiência
            </NextLink>
          </div>
          <div className="item">
            <NextImage
              src="/icons/javascript_icon.png"
              alt=""
              width="30"
              height="30"
            ></NextImage>
            <NextLink
              target="_blank"
              href="https://www.linkedin.com/in/gobbodev/"
            >
              <span>JavaScript -</span> 2 meses de experiência
            </NextLink>
          </div>
          <div className="item">
            <NextImage
              src="/icons/git_icon.png"
              alt=""
              width="30"
              height="30"
            ></NextImage>
            <NextLink
              target="_blank"
              href="https://www.linkedin.com/in/gobbodev/"
            >
              <span>Git -</span> 4 meses de experiência
            </NextLink>
          </div>
          <div className="item">
            <NextImage
              src="/icons/html_icon.png"
              alt=""
              width="30"
              height="30"
            ></NextImage>
            <NextImage
              src="/icons/css_icon.png"
              alt=""
              width="30"
              height="30"
            ></NextImage>
            <NextLink
              target="_blank"
              href="https://www.linkedin.com/in/gobbodev/"
            >
              <span>HTML & CSS -</span> 4 meses de experiência
            </NextLink>
          </div>
          <div className="item">
            <NextImage
              src="/icons/react_icon.png"
              alt=""
              width="30"
              height="30"
            ></NextImage>
            <NextLink
              target="_blank"
              href="https://www.linkedin.com/in/gobbodev/"
            >
              <span>React -</span> 4 meses de experiência
            </NextLink>
          </div>
          <div className="item">
            <NextImage
              src="/icons/react_icon.png"
              alt=""
              width="30"
              height="30"
            ></NextImage>
            <NextLink
              target="_blank"
              href="https://www.linkedin.com/in/gobbodev/"
            >
              <span>React Native -</span> 4 meses de experiência
            </NextLink>
          </div>
        </div>
      </div>
    </S.TecsLayout>
  );
}
