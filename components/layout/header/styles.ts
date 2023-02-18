import styled from "styled-components";

export const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  height: 0;
  nav {
    margin-top: calc(23vh - 2.5vw);
    margin-left: -2.5vw;
    opacity: 1 !important;
    @keyframes shine {
      0% {
        background-position: 100%;
      }

      100% {
        background-position: -100%;
      }
    }
    a {
      /*font-size: calc(1vw + 1vh);*/
      /*rgba(255, 255, 255, 1) 55%,*/
      font-size: 1.15vw;
      font-weight: 700;
      background: linear-gradient(
        -35deg,
        var(--t-color) 55%,
        rgba(255, 255, 255, 1) 55%,
        var(--t-color) 80%,
        var(--t-color) 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-size: 200%;
      animation: shine 4.5s infinite;
      transition: all 0.3s linear;
      -webkit-text-stroke: 0.09vw var(--fc-color);
      &:hover {
        transform: translateY(-5px);
      }
    }
    .contact {
      position: absolute;
      margin-left: -13.9vw;
      animation-delay: 0.4s;
    }

    .tecs {
      position: absolute;
      margin-top: 11vh;
      margin-left: -5.7vw;
      animation-delay: 2.2s;
    }
    .project {
      position: absolute;
      margin-top: -3.5vh;
      margin-left: -2.5vw;
      animation-delay: 1s;
    }
    .portfolio {
      position: absolute;
      margin-left: 8vw;
      animation-delay: 1.6s;
    }
  }
  .menu-mobile {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    nav {
      visibility: hidden;
      opacity: 0;
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 25px;
      align-items: center;
      a {
        font-size: 26px;
        font-weight: 700;
        -webkit-text-stroke: 1px var(--fc-color);
        transition: none;
        padding-bottom: 5px;
        border-bottom: 3px solid var(--fc-color);
        background: linear-gradient(
        -35deg,
        var(--p-color) 55%,
        rgba(255, 255, 255, 1) 55%,
        var(--p-color) 80%,
        var(--p-color) 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-size: 200%;
        &:hover {
          transform: none;
        }
      }
      .contact {
        position: relative;
        margin: 0;
      }
      .tecs {
        position: relative;
        margin: 0;
        animation-delay: 1s;
      }
      .project {
        position: relative;
        margin: 0;
        animation-delay: 1.6s;
      }
      .portfolio {
        position: relative;
        margin: 0;
        animation-delay: 2.2s;
      }
    }
    .menu-mobile {
      position: absolute;
      display: flex;
      width: 100%;
      height: 70px;
      justify-content: flex-end;
      gap:15px;
      .backMin-container {
        z-index: 99;
        opacity: 0;
        visibility: hidden;
        transition: "visible 0.5s linear, opacity 0.5s linear";
        label {
          display: flex;
          flex-direction: column;
          width: 40px;
          z-index: 99;
          gap:13px;
          cursor: pointer;
          margin-top: 22px;
          margin-right: 5px;
        }
        label span {
          background: var(--t-color);
          border: 2px solid var(--fc-color);
          height: 5px;
          margin: 5px 0;
          transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
        }
        span:nth-of-type(1) {
          width: 100%;
        }
        span:nth-of-type(2) {
         opacity:0;
         visibility: hidden;
         transition: "visibility 0.5s linear, opacity 0.5s linear";
        }
        input[type="checkbox"] {
          display: none;
        }
      }
      .openClose-container {
        z-index: 99;
        margin-right:5px;
        label {
          display: flex;
          flex-direction: column;
          width: 55px;
          z-index: 99;
          cursor: pointer;
          margin-top: 8px;
          margin-right: 5px;
        }
        label span {
          background: var(--t-color);
          border: 2px solid var(--fc-color);
          height: 5px;
          margin: 5px 0;
          transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
        }
        span:nth-of-type(1) {
          width: 50%;
        }
        span:nth-of-type(2) {
          width: 100%;
        }
        span:nth-of-type(3) {
          width: 75%;
        }
        input[type="checkbox"] {
          display: none;
        }
        input[type="checkbox"]:checked ~ span:nth-of-type(1) {
          transform-origin: bottom;
          transform: rotatez(45deg) translate(7px, 1px);
        }
        input[type="checkbox"]:checked ~ span:nth-of-type(2) {
          transform-origin: top;
          transform: rotatez(-45deg);
        }
        input[type="checkbox"]:checked ~ span:nth-of-type(3) {
          transform-origin: bottom;
          width: 50%;
          transform: translate(23px, -7px) rotatez(45deg);
        }
      }
    }
    .background-menu {
      position: absolute;
      background-color: #000022;
      overflow: hidden;
      height: fit-content;
      z-index: 98;
      opacity: 0;
      visibility: hidden;
      transition: visibility 0.3s linear, opacity 0.3s linear;
      span:nth-of-type(1) {
        display: block;
        width: 100vw;
        height: 35vh;
      }
      span:nth-of-type(2) {
        display: block;
        width: 100vw;
        height: 35vh;
      }
      span:nth-of-type(3) {
        display: block;
        width: 100vw;
        height: 30vh;
      }
    }
  }
`;
