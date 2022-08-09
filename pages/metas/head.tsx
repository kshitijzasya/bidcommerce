import type { NextPage } from 'next'
import Head from 'next/head'
import type { AppProps } from 'next/app';

const HeadMetas: NextPage = () => {
    return (
        <div>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Ecommerce Tailwind</title>
            <link
                rel="shortcut icon"
                href="assets/images/favicon/favicon.ico"
                type="image/x-icon"
            />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <link
                href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap"
                rel="stylesheet"
            />
        </div>
    )
}

export default HeadMetas;