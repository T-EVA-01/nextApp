import Layout from '../../components/Layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/Date'
import utilStyles from '../../styles/utils.module.css'
import { id } from 'date-fns/locale'


export default function Post({ postData: {title, date}, postData }) {

    return (
        <Layout 
            meta={{
                title, 
                date
            }}
        >
            <article>
                <h1 className={utilStyles.headingXl}>{title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    )

}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    console.log({postData})
    return {
      props: {
        postData
      }
    }
  }