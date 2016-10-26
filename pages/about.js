import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default () => (
    <div>
        <Head>
            <title>About</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div>
            <Link href="/">Home</Link>
        </div>
        <div>About us...</div>
    </div>
);
