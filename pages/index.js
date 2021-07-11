
import Styles from '../styles/Home.module.css';
import Head from 'next/head';
import Link from 'next/link';
import useSWR from 'SWR';

import Header from './components/header';
import Content from './components/content';


export default function Home() {
  let title = 'next.js practice';
  const { data, error } = useSWR('/api/message');
  if (error) return <div>faild to load</div>
  if (!data) return <div>loading...</div>

  return (
    <Content>
      <style jsx>
        {`
        p{
          font-weight:bold;
        }
      `}
      </style>
      {/* メタタグtitle 追加 */}
      <Head>
        <title>next.js練習</title>
      </Head>

      <Header title="最初のページ" />
      <p>{data.message}</p>

      <Link href="/about">
        {/* aタグは実際に出力されるhtml要素を指定 */}
        <a>Aboutへ</a>
      </Link>

    </Content>
  )
}