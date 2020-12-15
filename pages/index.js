import Layout from '../components/Layout'
import Link from 'next/link'
import Section from '../components/section'
import {
  getIndexData
} from "../lib/posts"

export default function Home({ dataPage }) {
  return (
    <Layout 
      home
      meta={{
        title: dataPage.name
      }}>

      <Section>
        <h2>{dataPage.title}</h2>
        <ul>
            {dataPage.input.map(({ id, title }) => 
              <li key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
              </li>
            )}
        </ul>
      </Section>
      
    </Layout>
  )
}

export async function getStaticProps() {
  const dataPage = getIndexData()
  return {
    props: {
      dataPage
    }
  }
}