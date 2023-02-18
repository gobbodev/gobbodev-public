import * as S from "./styles";
import NextLink from "next/link";
import NextImage from "next/image";

export default function Left() {
  return (
    <S.Left>
      <div className="artist-content">
        <NextLink href="https://www.behance.net/pixeljeff" target="_blank">
          <NextImage
            className="art-logo"
            alt="Um button rosa claro do lado direito do rosto do criador da animação de fundo"
            src="/images/artist_logo.png"
            height={40}
            width={40}
          ></NextImage>
          <span></span>
        </NextLink>
      </div>
      <div className="gobbo-content">
        <h1>
          gobbo.<span>dev</span>
        </h1>
        <h2>
          Front-end <span>Dev</span>eloper
        </h2>
      </div>
      <div className="eu-content">
        <NextLink target="_blank" href="https://www.linkedin.com/in/gobbodev/">eu</NextLink>
      </div>
    </S.Left>
  );
}
