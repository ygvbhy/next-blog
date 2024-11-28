import Head from "next/head";
import homeStyle from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>SK</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={homeStyle.headingMd}>
        <p>[SK Introduction]</p>
        <p>(This is a website)</p>
      </section>
      <section className={`${homeStyle.headingMd} ${homeStyle.padding1px}`}>
        <h2 className={homeStyle.headingLg}>Blog</h2>
        <ul className={homeStyle.list}>
          <li></li>
        </ul>
      </section>
    </>
  );
}
