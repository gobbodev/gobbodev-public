import styled from "styled-components";

export const TecsLayout = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  width: 100%;
  animation: flow 0.3s linear;
  .container {
    display: flex;
    flex-direction: column;
    position: relative;
    margin-left: 3vw;
    margin-top: 10vh;
    max-height: 55vh;

    h2 {
      color: transparent;
      -webkit-text-stroke: 0.06vw var(--fc-color);

      white-space: nowrap;
      z-index: -3;
      font-size: calc(0.8vw + 0.4vh);
      margin-bottom: calc(1vh + 0.6vw);
    }
    .tecs {
      display: flex;
      flex-direction: column;
      gap: 1vh;
      .item {
        position: relative;
        display: flex;
        gap: calc(0.45vw + 0.1vh);
        align-items: center;
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
        span {
          -webkit-text-fill-color: var(--fc-color);
        }
        img {
          margin-right: 4px;
          width: 1.2vw;
          height: 1.2vw;
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    z-index: 98;
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
      h2 {
        color: var(--p-color);
        -webkit-text-stroke: 1px var(--fc-color);
        white-space: nowrap;
        z-index: -3;
        font-size: 22px;
        margin-bottom: 20px;
      }
      .tecs {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 30px;
        gap: 5px;
        .item {
          gap: 8px;
          img {
            width: 22px;
            height: 22px;
          }
          a,
          p {
            background: -webkit-linear-gradient(
              var(--fc-color),
              var(--p-color)
            );
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            font-family: var(--font-t);
            font-size: 22px;
            margin: 0;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 415px) {
    img {
            width: 18px !important;;
            height: 18px !important;;
    }
    a,
    p {
      font-size: 20px !important;
    }
  }
  @media only screen and (max-width: 380px) {
    a,
    p {
      font-size: 18px !important;
    }
  }
  @media only screen and (max-width: 350px) {
    a,
    p {
      font-size: 16px !important;
    }
  }
`;
