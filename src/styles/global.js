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

    a {
      color: var(--main-light);
    }

    body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
        margin: 0;
        width: 100%;
        height: 100vh;
        overflow: visible;
        
        --main: #2c3e50;
        --main-light: #425D79;
        --main-lighter: #54779A;

        --bg: ${({theme}) => theme.bg};
        --text-color: ${({theme}) => theme.text};

        --body-bg: ${({theme}) => theme.bodyBg};

        background: ${({theme}) => theme.bodyBg};


        #root {
            width:100%;
            height:100%;
        }
    }


    }


`