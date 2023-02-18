import styled from "styled-components";

export const ContactLayout = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  width: 100%;
  .container {
    display: flex;
    flex-direction: column;
    position: relative;
    margin-left: 3vw;
    margin-top: 11vh;
    width: 100%;
    max-height: 55vh;
    gap: 4vh;
    h2 {
      color: transparent;
      -webkit-text-stroke: 0.06vw var(--fc-color);

      white-space: nowrap;
      z-index: -3;
      font-size: calc(0.8vw + 0.4vh);
      margin-bottom: calc(0.8vh + 0.4vw);
    }
    .item {
      position: relative;
      display: flex;
      gap: calc(0.45vw + 0.1vh);
      align-items: center;
      img {
        width: 1vw;
        height: 1vw;
      }
      a,
      p {
        font-family: var(--font-t);
        font-size: calc(0.9vw + 0.5vh);
        background: -webkit-linear-gradient(#fff, var(--p-color));
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        margin: 0;
      }
    }
    .perfil {
    }
    .contatos {
      margin-top: calc(2.8vh + -0.5vw);
    }
  }
  @media only screen and (max-width: 768px) {
    z-index: 98;
    animation: flow 0.3s linear;
    .container {
      justify-content: center;
      align-items: center;
      height: 100vh;
      max-height: none;
      margin: 0;

      //margin-left: 3vw;
      //margin-top: 11vh;

      //max-height: 55vh;
      //gap: 4vh;
      .perfil {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 30px;
        gap: 5px;
      }
      .contatos {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      h2 {
        color: var(--p-color);
        -webkit-text-stroke: 1px var(--fc-color);
        z-index: -3;
        font-size: 22px;
        margin-bottom: 15px;
      }
      .item {
        gap: 8px;
        img {
          width: 22px;
          height: 22px;
        }
        a,
        p {
          font-family: var(--font-t);
          font-size: 22px;
          background: -webkit-linear-gradient(var(--fc-color), var(--p-color));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          margin: 0;
        }
      }
    }
  }
`;
