import styled from 'styled-components'

const Article = styled.article`
    
    display: flex;
    flex-direction: column;

    h1 {
        font-size: 30px;
        font-weight: bold;
        padding: 0;
        /* margin-right: 30px; */
        margin-bottom: 30px;
        align-self: center;
    }


    p {
        margin-top: 0;
        margin-bottom: 15px;
        font-style: italic;
    }

    
    p:last-child {
        margin-bottom: 0;
    }
    
`

const Index = ({className, articleTitle, articleText}) => {

    console.log(articleText)

    return (
        <Article className={className}>
            <h1>{articleTitle}</h1>
            {articleText && <div>{
                articleText.map(item => {
                    return <p>{item}</p>
                })
            }</div>}
        </Article>
    )
} 

export default Index 