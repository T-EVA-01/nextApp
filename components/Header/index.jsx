import styled from 'styled-components'
import siteTitle from '../Layout'
import Link from 'next/link'


const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    .header__title {
        font-size: 2.5rem;
        line-height: 1.2;
        font-weight: 800;
        letter-spacing: -0.05rem;
        margin: 1rem 0;
    }

    .back-to-home {
        /* margin: 3rem 0 0;  */
    }

`


const Index = function({home, siteTitle}) {
    return(

        <Header>
            <h1 className={"headaer__title"}>{siteTitle}</h1>
            {home && (
                <div className={"back-to-home"}>
                    <Link href="/">
                    <a>← Back to home</a>
                    </Link>
                </div>
            )}
        </Header>
    )
}

export default Index