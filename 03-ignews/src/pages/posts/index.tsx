import Head from 'next/head';
import React from 'react';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | ig.news</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>3rd June 2014</time>
            <strong>My first title</strong>
            <p>When testing requests/controllers it’s common to have scenarios where a unique request can modify more than one table. For tests like this, chaining expectations will speed up the tests.</p>
          </a>
          <a href="#">
            <time>3rd June 2014</time>
            <strong>My first title</strong>
            <p>When testing requests/controllers it’s common to have scenarios where a unique request can modify more than one table. For tests like this, chaining expectations will speed up the tests.</p>
          </a>
          <a href="#">
            <time>3rd June 2014</time>
            <strong>My first title</strong>
            <p>When testing requests/controllers it’s common to have scenarios where a unique request can modify more than one table. For tests like this, chaining expectations will speed up the tests.</p>
          </a>
        </div>
      </main>
    </>
  );
}