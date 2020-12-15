import styled from 'styled-components'
import { cols, fontSize, mediaBreackpointUp } from '../../styles/mixins'


const Performance = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: ${cols(21)};
    background: gray;
    height: 100vh;
    ${fontSize(20)};
    line-height: 1.5;

    ${mediaBreackpointUp('lg')} {
        width: ${cols(18)};
    }
`

const Index = function({className}) {
    return(
        <Performance className={className}>
    
        </Performance>
    )
}


export default Index 