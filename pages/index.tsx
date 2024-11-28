import Head from "next/head";
import homeStyle from "../styles/Home.module.css";
import { getSortedPostsData } from "@/lib/post";

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

function Home({
  allPostsData,
}: {
  allPostsData: { date: string; title: string; id: string }[];
}) {
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
          {allPostsData.map(({ id, date, title }) => (
            <li className={homeStyle.listItem} key={id}>
              <a href="">{title}</a>
              <br />
              <small className={homeStyle.lightText}>{date}</small>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default Home;
