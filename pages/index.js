import Head from "next/head";
import Link from "next/link";
import { Button } from "antd";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next App With Redux</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Link href="/count">
          <Button type="primary">to count page</Button>
        </Link>
        <Link href="/name">
          <Button type="primary">to name page</Button>
        </Link>
      </main>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
