import styled from "styled-components";

export const Loading = styled.section`
  @keyframes flow {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
  width:100vw; 
  height:100vh; 
  background:#000;
  display:flex;
  justify-content: center;
  align-items:center;
  flex-direction:column;
  visibility: visible;
  opacity: 1;
  transition: 0.5s linear;
  animation: flow 0.8s ease;

  @keyframes moveUp{
    0%{
      transform: translateY(-10px);
    }
    20%{
      transform: translateY(0);
    }
  }
  span{
    display: inline-block;
    background: -webkit-linear-gradient(var(--fc-color), var(--fc-color));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: moveUp 0.5s linear infinite;
    animation-duration: 2s;
  }
  #sp1{
    animation-delay:1s;
  }
  #sp2{
    animation-delay:1.3s;
  }
  #sp3{ 
    animation-delay:1.6s;
  }
  p{
    font-size:14px;
    font-family: var(--font-s);
    font-weight:600;
    margin-top: 25px;
    background: -webkit-linear-gradient(var(--fc-color), var(--fc-color));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
