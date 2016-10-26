import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default () => (
    <div>
        <Head>
            <title>Home</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div>
            <Link href="/about">About</Link>
        </div>
        <div>Hello world!</div>
    </div>
);
