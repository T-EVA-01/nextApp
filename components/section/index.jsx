import styled from 'styled-components'

const Section = styled.section`

    padding-top: 1px;

    h2 {
        font-size: 1.5rem;
        font-weight: bold;
        line-height: 1.4;
        margin: 1rem 0;
    }

    ul {
        list-style: none;
    }

    li:not(:last-child) {
        margin: 0 0 1.25rem;
    }
`
export default Section