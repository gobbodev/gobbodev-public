import styled from "styled-components";

export const Left = styled.section`
  position: absolute;
  display: flex;
  height: 100vh !important;
  align-items: flex-start;
  text-align: center;

  @keyframes blink {
    70% {
      opacity: 0.955;
    }
  }

  .artist-content {
    display: flex;
    position: absolute;
    top: calc(59vh - 1vw);
    left: calc(0.2vw - 0.5vh);
    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: calc(0.5vw + 0.3vh);
    }
    .art-logo {
      height: 30px;
      width: 30px;
    }

    span {
      color: var(--p-color);
      -webkit-text-stroke: 0.045vw var(--fc-color);
      text-shadow: rgb(0 0 0 / 30%) 3px 5px 1px, rgb(255 255 255) 0px 0px 8px,
        rgb(56 238 255) 0px 0px 10px, rgb(56 238 255) 0px 0px 20px;
      font-size: calc(0.7vw + 0.25vh);
      animation: blink 0.15s infinite;
      &::after {
        content: "Artista";
      }
    }
  }
  @keyframes shine {
    0% {
      background-position: 100%;
    }

    100% {
      background-position: -100%;
    }
  }
  .gobbo-content {
    display: flex;
    align-self: flex-start;
    margin-top: calc(25.5vh - 8vw);
    margin-left: calc(1.05vw - 0.5vh);
    @keyframes fade {
      40% {
        opacity: 1;
      }
      42% {
        opacity: 0.1;
      }
      43% {
        opacity: 1;
      }
      45% {
        opacity: 0.1;
      }
      46% {
        opacity: 1;
      }
    }

    h1 {
      margin-left: 0.3vw;
      margin-right: 0.1vw;
      writing-mode: vertical-lr;
      transform: rotate(180deg);
      font-family: var(--font-s);
      font-weight: 700;
      color: var(--p-color);
      -webkit-text-stroke: 0.06vw var(--fc-color);
      text-shadow: 3px 5px 1px rgba(0, 0, 0, 0.3), 0 0px 8px #fff,
        0 0 10px #38eeff, 0 0 20px #38eeff;
      font-size: calc(1.65vw + 1.3vh);
      span {
        animation: fade 3s infinite alternate;
        animation-delay: 2s;
      }
    }
    h2 {
      writing-mode: vertical-lr;
      transform: rotate(180deg);
      font-family: var(--font-s);
      font-weight: 400;
      color: var(--fc-color);
      -webkit-text-stroke: 0.02vw var(--s-color);
      font-size: calc(0.6vw + 0.3vh);
      text-shadow: 3px 5px 1px rgba(0, 0, 0, 0.3), 0 0px 15px #fff,
        0 0 20px #38eeff, 0 0 50px #38eeff;

      span {
        animation: fade 3s infinite alternate;
      }
    }
  }

  .eu-content {
    margin-left: 7.6vw;
    margin-top: 5.5vh;
    display: flex;
    align-self: center;
    a {
      font-size: 1.35vw;
      font-weight: 700;
      -webkit-text-stroke: 0.07vw var(--p-color);
      transition: all 0.3s linear;
      background: linear-gradient(
        -35deg,
        var(--fc-color) 55%,
        var(--p-color) 55%,
        var(--fc-color) 70%,
        var(--fc-color) 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-size: 200%;
      animation: shine 2.5s infinite;
      &:hover {
        transform: translateX(5px);
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .artist-content {
      left: calc(2.2vw - 0.5vh);
      .art-logo {
        height: 22px;
        width: 22px;
      }
      span {
        font-size: calc(1.8vw + 0.25vh);
        -webkit-text-stroke: 0.5px var(--fc-color);
      }
    }
    .gobbo-content {
      gap: 5px;
      h1 {
        margin-top: -45px;
        margin-left: calc(4.4vw - 1.2vh);
        font-size: calc(3.8vw + 1.3vh);
        -webkit-text-stroke: 1.3px var(--fc-color);
        text-shadow: 3px 8px 1px rgba(0, 0, 0, 0.3), 0 0px 3px #fff,
          0 0 8px #38eeff, 0 0 8px #38eeff;
      }
      h2 {
        margin-top: -25px;
        font-size: calc(1.1vw + 0.3vh);
        -webkit-text-stroke: 0.1px var(--s-color);
        text-shadow: 3px 5px 1px rgba(0, 0, 0, 0.3), 0 0px 1px #fff,
          0 0 6px #38eeff, 0 0 10px #38eeff;
      }
    }

    .eu-content {
      display: none;
    }
  }
  @media only screen and (max-height: 400px) {
    .artist-content {
      span {
        &::after {
          content: "??????";
        }
      }
    }
  }
`;
