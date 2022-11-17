import Head from 'next/head';
import Link from 'next/link';

export default function placesChanging(){
    return (
        <>
            <Head>
                <title>Announcements</title>
            </Head>
            <h1>First announcement</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </>
    )
}