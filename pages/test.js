import Layout from '../components/Layout'
import {getTestData} from '../lib/posts'
import Performance from '../components/Performance'



export default function Test({dataPage}) {
    return(
        <Layout 
            meta={{
                title: dataPage.name,
            }}
            home
        >
            <Performance className={'preformance'}>
                
            </Performance>
        
        </Layout>
    )
}

export async function getStaticProps() {
    const dataPage = getTestData()
    return {
        props: {
            dataPage
        }
    }
}