import styled from "styled-components";

export const PortfolioLayout = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  width: 100%;

  h2 {
    color: transparent;
    -webkit-text-stroke: 0.06vw var(--fc-color);
    z-index: -3;
    font-size: calc(0.8vw + 0.4vh);
    margin-top: calc(10vh);
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    .projects {
      display: flex;
      flex-direction: row;
      max-height: 55vh;
      position: absolute;
      gap: 2vw;

      .row-links {
        display: flex;
        gap: 1vw;
      }
      .item {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        .thumb {
          border: 3px solid var(--fc-color);
          border-radius: 11%;
          margin-bottom: 1vh;
          box-shadow: 3px 5px 1px rgb(0 0 0 / 30%), 0 0px 8px #fff,
            0 0 10px var(--p-color), 0 0 20px var(--p-color);
          width: 15vw;
          height: 9vw;
        }
        a,
        p,
        h3 {
          font-family: var(--font-t);
          font-size: calc(1.2vw + 0.3vh);
          color: transparent;
          font-weight: 400;
          -webkit-text-stroke: 0.04vw var(--fc-color);
          margin: 0;
          text-shadow: 3px 5px 1px rgb(0 0 0 / 30%), 0 0px 8px #fff,
            0 0 10px var(--p-color), 0 0 20px var(--p-color);
        }
        .icon {
          width: 1vw;
          height: 1vw;
        }
      }
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
      .projects {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 65px;
        gap: 50px;
        .item {
          gap: 0px;
          .thumb{
            max-width: 280px;
            width: 100%;
            max-height: 160px;
            height: 100%;
          }
          .icon {
            width: 22px;
            height: 22px;
          }
          a,
          p {
            font-family: var(--font-t);
            font-size: 22px;
            margin: 0;
          }
          h3 {
            color: var(--t-color);
            -webkit-text-stroke: 1px var(--fc-color);
            z-index: -3;
            font-size: 22px;
            margin-bottom: 5px;
          }
        }
      }
    }
  }
  @media only screen and (max-height: 600px) {
    .container{
      .projects{
        gap: 25px;
        .item{
          .thumb{
            max-height: 130px;
          }
        }
      }
    }
  }
`;
