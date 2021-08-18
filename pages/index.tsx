import Head from 'next/head';
import Start from '../components/Start';

export default function Home() {
       return (
        <div>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="shortcut icon" href="./favicon.png" type="image/x-icon" />
                <title>Porta premiada</title>
            </Head>
            <Start title="Porta premiada"></Start>
        </div>
    )
}
