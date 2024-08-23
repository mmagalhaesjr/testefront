import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        color: #ffffff;
       
       
    }
  
 
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }


    
* {
margin: 0;
padding: 0;
box-sizing: border-box;
}

html, body {
width: 100%;
height: 100%;
letter-spacing: 1.5px;

  font-family: "Orbitron", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;


background: rgb(16,105,127);
background: -moz-radial-gradient(circle,  rgba(16,105,127,1) 0%, rgba(13,80,114,1) 50%, rgba(4,12,36,1) 100%);
background: -webkit-radial-gradient(circle,  rgba(16,105,127,1) 0%, rgba(13,80,114,1) 50%, rgba(4,12,36,1) 100%);
background: radial-gradient(circle,  rgba(16,105,127,1) 0%, rgba(13,80,114,1) 50%, rgba(4,12,36,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#3a77b4",endColorstr="#000000",GradientType=1)

}
    
   

    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    a {
        text-decoration: none;
    }

 



    
`

export default GlobalStyle