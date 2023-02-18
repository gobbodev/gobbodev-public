import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 /*importante*/ /* o // buga td que vem depois, pq? n sei*/

#__next{
    scroll-behavior: smooth;
}

:root {
    --p-color: #d600ff; /* rosa claro */
    --s-color: #00b8ff; /* azul claro */
    --t-color: #001eff; /* azul escuro */
    --f-color: #bd00ff; /* rosa escuro */
    --fc-color: #20ffff; /* verde claro  */

    
    --font-p: 'Silkscreen', cursive;
    --font-s: 'Press Start 2P', cursive;
    --font-t: 'VT323', monospace;
    
   
}


*:focus {
    outline: transparent !important;
}

a {
    text-decoration: unset !important;
}

body {
    font-family: var(--font-p);
    line-height: 1.5;
    overflow:hidden;
}
.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
    margin-bottom: 0.5rem;
    font-family: inherit;
    font-weight: 500;
    line-height: 1.2;
    color: inherit;
    font-size: 32px;
}
h2{
    font-weight: 700;
    font-size: clamp(1.375rem, 1.057rem + 0.942vw, 2.188rem); /*22px - 35px*/
}
h3{
    font-weight: 600;
    font-size: clamp(1.125rem, 0.832rem + 0.87vw, 1.875rem);
}
h6{
    font-weight: 500;
    font-size: clamp(0.5rem, 0.378rem + 0.362vw, 0.813rem); /*8px - 13px*/
}

input, textarea, select, button{
    font-family:var(--font-p)
}

.container {
    max-width: 1200px;
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    margin-left: auto;
    margin-right: auto;
   
}

.header-fixed-height {
    height: 115px;
}
`;
