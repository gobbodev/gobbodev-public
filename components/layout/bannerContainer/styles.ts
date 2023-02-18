import styled from "styled-components";

export const BannerContainer = styled.div`
  position: relative;
  height: 100vh;

  .desktop-background {
    z-index: -1;
  }
  .mobile-background {
    display: none;
  }
  .container-left-png {
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    .left-png {
      margin-left: -42vw;
      object-fit: contain;
    }
  }
  @media only screen and (max-width: 768px) {
    .desktop-background {
      display: none !important;
    }
    .mobile-background {
      display: block;
      z-index: -1;
    }
  }
`;
