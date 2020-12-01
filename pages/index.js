import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/Date'
import {
  getIndexData
} from "../lib/posts"

export default function Home({ allPostsData, dataPage }) {
  return (
    <Layout 
      home
      meta={{
        title: dataPage.name
      }}>
      {/* <section className={utilStyles.headingMd}>
        <p>Даров, я хуёк - ничего не могёк, эт моя простая хуйня</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section> */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>{dataPage.title}</h2>
        <ul className={utilStyles.list}>
          {dataPage.input.map(({ id, title }) => 
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
            </li>
          )}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  const dataPage = getIndexData()
  return {
    props: {
      allPostsData,
      dataPage
    }
  }
}