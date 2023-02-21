import LoginComponent from "@/components/LoginComponent/LoginComponent";
import AuthHeader from "@/components/UIComponents/Header/AuthHeader";
import Head from "next/head";


export default function Login() {
    return (
        <>
            <Head>
                <title>Login Page</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <AuthHeader/>
            <LoginComponent />
        </>
    )
}
