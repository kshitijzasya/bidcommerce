import type { AppProps } from "next/app"; 
import type { NextPage } from "next";

const withAuth = ({Component, pageprops}: AppProps) => {
    return (
        <>
        <Component {...pageprops} />
        </>
    )
} 

export default withAuth;