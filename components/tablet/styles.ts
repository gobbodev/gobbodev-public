import styled from "styled-components";

export const Tablet = styled.section`
  @keyframes flow {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
  margin-top: 15vh;
  width: 0;
  height: 0;
  position: relative;
  display: flex;
  visibility: visible;
  animation: flow 0.5s linear;
  opacity: 1;
  transition: opacity 0.5s linear;
  
  .img-container {
    position: absolute;
    display: flex;
    justify-content: flex-end;
    height: 55vh;
    width: 43.5vw;
    .tabletao {
      position: absolute !important;
      pointer-events: none;
    }
    .button-up{
      margin-top:12.1vh;
      position:absolute;
      color:transparent;
      background-color:transparent;
      width:0.6vw; /*calc, decimal n funciona com button o_O*/
      height:2.7vh;
      z-index:2;
      &:hover{
        cursor: pointer;
      }
     
    }
    .button-down{
      margin-top:15.4vh;
      position:absolute;
      color:transparent;
      background-color:transparent;
      width:0.6vw; /*calc, decimal n funciona com button o_O*/
      height:2.9vh;
      z-index:2;
      &:hover{
        cursor: pointer;
      }
     
    }
    .button-dl{
      margin-top:21.2vh;
      position:absolute;
      color:transparent;
      background-color:transparent;
      width:0.6vw; /*calc, decimal n funciona com button o_O*/
      height:4.8vh;
      z-index:2;
      &:hover{
        cursor: pointer;
      }
     
    }
    .tip-container {
      position: absolute;
      margin-top: 2vh;
      margin-right: 1.3vw;
      /*width: fit-content;
      height: fit-content;*/
      border-top: 0;
      border-right: 0;
      padding-left: 1vw;
      padding-right: 0.6vw;
      padding-top: 1vh;
      padding-bottom: 0.5vh;
      
      @keyframes blink {
        70% {
          opacity: 0.955;
        }
      }
      h4 {
        color: var(--t-color);
        -webkit-text-stroke: 0.05vw var(--fc-color);

        white-space: nowrap;
        font-size: calc((0.7vw + 0.4vh));
        span{
          animation: blink 0.15s infinite;
          text-shadow: 3px 5px 1px rgba(0, 0, 0, 0.3), 0 0px 8px #fff,
        0 0 10px #38eeff, 0 0 20px #38eeff;
        }
      }
    }
  }
`;
