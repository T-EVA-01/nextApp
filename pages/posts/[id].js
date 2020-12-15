import Layout from '../../components/Layout'
// import { getAllPostIds, getPostData } from '../../lib/posts'
// import Head from 'next/head'
// import Date from '../../components/Date'
import utilStyles from '../../styles/utils.module.css'
// import { id } from 'date-fns/locale'
import {
    getIndexData
  } from "../../lib/posts"
import Article from '../../components/Article'

export default function Post({ data: [{text, title, id}] }) {
    // console.log(title)
    console.log(text)
    return (
        <Layout 
            home
            meta={{
                title
            }}
            pageTitle={id}
        >

            <Article 
                articleTitle={title}
                articleText={text}
                className={"article"}
            />
        </Layout>
    )

}

export async function getStaticPaths() {

    const pathss = () => {
        const data = getIndexData()
        return data.input.map((item) => {
            return {
                params: {
                    id: item.id
                }
            }
        })
    }

    const paths = pathss()

    console.log(paths)

    // const pathssss = getAllPostIds()
    return {
        paths,
        // pts,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    // const postData = await getPostData(params.id)
    const postDatas = getIndexData()
    const data = postDatas.input.filter((item) => item.id === params.id)
    
    console.log("This page data :", data)
    return {
      props: {
        data
      }
    }
  }