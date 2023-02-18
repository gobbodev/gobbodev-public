import styled from "styled-components";

export const ProjectLayout = styled.div`
  z-index: 1;
  width: 100%;

  iframe {
    max-width: 220px !important;
    width: 100%;
    height: 72px; /*mudar*/
    transform: scale(0.8);
    transform-origin: 0 0;
  }
  form {
    margin-left: 4.2vw;
    margin-top: 4vh;
    width: 80%;
    .container-title {
      display: flex;
      justify-content: center;

      h2 {
        margin-bottom: 3vh;
        font-size: calc(1vw + 0.4vh);
        color: transparent;
        -webkit-text-stroke: 0.08vw var(--fc-color);
        border-bottom: 2px solid var(--fc-color);
      }
    }
    label {
      color: transparent;
      -webkit-text-stroke: 0.06vw var(--fc-color);
      font-weight: 800;
      white-space: nowrap;
      z-index: -3;
      font-size: calc(0.8vw + 0.4vh);
      font-family: var(--font-f);
    }
    input {
      font-family: var(--font-s);
      font-weight: 400;
      font-size: calc(0.5vw + 0.2vh);
      color: var(--p-color);
      background-color: #000;
      width: 20.4vw;
      height: 3vh;
      margin-left: 1vw;
      padding-left: 0.5vw;
      border: 2px solid grey;
    }
    input[type="email"] {
      width: 24.1vw;
    }
    select {
      color: var(--p-color);
      font-size: calc(0.5vw + 0.2vh);
      font-family: var(--font-s);
      margin-left: 1vw;
      background-color: #000;
      border: 2px solid grey;
      padding-left: 0.3vw;
      width: 15.2vw;
      height: 3.3vh;
    }
    .area-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: 0.4vh;
      textarea {
        font-family: var(--font-s);
        background-color: #000;
        color: var(--p-color);
        border: 2px solid grey;
        font-size: calc(0.5vw + 0.2vh);
        width: 24.5vw;
        height: 23.5vh;
        padding-left: 0.5vw;
        padding-top: 0.8vh;
      }
      .b-buttons {
        display: flex;
        flex-direction: column;
        gap: 2vh;
        width: 10vw;
        margin-left: 2vw;
        .g-recaptcha {
          width: 20vw;
          margin-bottom: -2vh;
          iframe {
            max-width: 220px !important;
            width: 100%;
            height: 72px; /*mudar*/
            transform: scale(0.8);
            transform-origin: 0 0;
          }
        }
        .btn-send {
          display: flex;
          width: 9vw;
          height: 6vh;
          align-items: center;
          justify-content: center;
          padding-right: 1vw;
          border: 2px solid grey;
          background: #000;
          &:hover {
            cursor: pointer;
          }
          svg {
            width: 40%;
            fill: var(--fc-color);
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1560px) {
    iframe {
      transform: scale(0.6) !important;
    }
  }
  @media only screen and (max-width: 1200px) {
    iframe {
      transform: scale(0.5) !important;
      margin-bottom: -10vh;
    }
  }
  @media only screen and (max-width: 1000px) {
    iframe {
      transform: scale(0.4) !important;
    }
  }
  @media only screen and (max-width: 830px) {
    iframe {
      transform: scale(0.35) !important;
    }
  }

  @media only screen and (max-width: 768px) {
    z-index: 98 !important;
    position: absolute;
    display: flex;
    justify-content: center;
    
    animation: flow 0.3s linear;
 
    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
      max-width: 500px;
      width: 100%;
      max-height: none;
      margin: 0;
      padding: 0 40px;
      overflow:scroll;
      label {
        color: transparent;
        -webkit-text-stroke: 0.5px var(--fc-color);
        font-size: 13px;
      }
      .container-title {
        h2 {
          color: var(--p-color);
          -webkit-text-stroke: 1px var(--fc-color);
          z-index: -3;
          font-size: 22px;
          margin-bottom: 30px;
          white-space: nowrap;
        }
      }
      input,
      input[type="email"] {
        margin-bottom: 10px;
        width: 70%;
        height: 30px;
        font-size: 9px;
        padding-left: 8px;
        margin-left: 0;
      }
      input[type="email"] {
        width: 100%;
      }
      .project-label{
        margin-right: 9px;
      }
      select {
        font-size: 9px;
        width: 62%;
        margin-top: 5px;
        margin-left: 0;
        margin-bottom: 15px;
        padding-left: 5px;
        height: 25px;
      }
      .info-container {
        display: flex;
        width: 100%;
        justify-content: flex-start;
        .info-label {
        }
      }
      .area-container {
        width: 100%;
        justify-content: flex-start;
        flex-direction: column;
        gap: 15px;
        height: fit-content;
        textarea {
          width: 100%;
          font-size: 9px;
          padding-left: 10px;
          padding-right: 10px;
        }
        .b-buttons {
          display: flex;
          flex-direction: row;
          width: 100%;
          margin-left: 0;
          gap: 100px;
          justify-content: center;
          margin-top: -5px;
          .g-recaptcha {
            margin-top:6px;
          }
          .btn-send {
            margin-top: 3vh;
            height: 60px;
            max-width: 180px;
            width: 100%;
            padding-right: 15px;
            color: var(--fc-color);
            svg {
              width: 30%;
            }
          }
        }
      }
    }
    iframe {
      transform: scale(0.8) !important;
    }
  }
  @media only screen and (max-width: 420px) {
    h2 {
      margin-top: 50px !important;
    }
    .b-buttons {
      margin-top: -15px !important;
      margin-bottom: -20px !important;
      .g-recaptcha {
        margin-top: 2px !important;
      }
      .btn-send {
        margin-top: 2.8vh !important;
        height: 45px !important;
        padding-right: 10px !important;
      }
    }
    iframe {
      transform: scale(0.6) !important;
    }
  }
  @media only screen and (max-width: 400px) {
    
    .b-buttons {
      .g-recaptcha {
        margin-top: 7px !important;
      }
    }

  }
  @media only screen and (max-height: 620px), screen and (max-width: 365px) {
    form {
      padding: 0 25px;
    }
    h2 {
      margin-bottom: 20px !important;
      font-size: 18px !important;
    }
    .b-buttons {
      .btn-send {
        margin-top: 2vh !important;
      }
    }
  }
`;
