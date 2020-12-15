// import '../styles/global.css'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    
    #__next {
        ${'' /* background-color: black; */}
        height: 100%;
    }


    * {
        box-sizing: border-box;
    }


    html,
    body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
            Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        line-height: 1.6;
        font-size: 18px;
    }

    a {
        color: #0070f3;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

    img {
        max-width: 100%;
        display: block;
    }

    ul {
        padding: 0;
        margin: 0;
    }

    h1, h2, h3, h4, h5, span, a {
        font-size: inherit;
        font-weight: inherit;
        line-height: inherit;
        text-transform: inherit;
        text-decoration: inherit;
        margin: 0;
    }
`

export default function App({Component, pageProps}) {
    return (

        <React.Fragment>
            <GlobalStyle/>
            <Component {...pageProps}/>
        </React.Fragment>

    
    )
}