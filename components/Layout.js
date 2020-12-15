import styles from './layout.module.css'
import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import styled from 'styled-components'
import Header from '../components/Header'
import { cols } from '../styles/mixins'


const Layout = styled.main`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`

export const siteTitle = 'English' 
const name = "Timofey Chunarev"


export default function Index({ home, meta, children, className }) {
    return (
      <React.Fragment>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <title>{meta.title}</title>
          <meta name="description" content="Learn how to build a personal website using Next.js"/>
          <meta property="og:image" content={`https://og-image.now.sh/${encodeURI(siteTitle)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}/>
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>

        <Header home/>
        <Layout className={className}>
          {children}
        </Layout>
      </React.Fragment>
    )
  }
