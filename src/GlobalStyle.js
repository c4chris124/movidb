import { CreateGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root{
    --maxWidth: 1280px;
    --white: #fff;
    --lightGrey: #eee;
    --medGrey: #1c1c1c;
    --fotSuperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
}

*{
    box-sizing: border-box;
    font-family: 'Abel', sans-serif;
}

body{
    margin: 0;
    padding: 0;

    h1{
        font-size: 2rem;
        font-wight: 600;
        color: var(--white);
    }
    h3{
        font-size: 1.1rem;
        font-wight: 600;
    }

    p{
        font-size: 1rem;
        color: var(--white);
    }
}



`