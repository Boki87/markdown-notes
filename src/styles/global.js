import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    
    html {
        box-sizing: border-box;

        * {
      outline: none;
      box-sizing: inherit;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
    }
    *,
    *::before,
    *::after {
      box-sizing: inherit;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    body {
        font-family: 'Helvetica', 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", '!default';
        margin: 0;
        width: 100%;
        height: 100vh;
        overflow: visible;
        
        --main: #2c3e50;
        --main-light: #425D79;
        --main-lighter: #54779A;

        background: ${({theme}) => theme.bodyBg};


        #root {
            width:100%;
            height:100%;
        }
    }


    }


`