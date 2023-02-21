import RegisterComponent from "@/components/RegisterComponent/RegisterComponent";
import AuthHeader from "@/components/UIComponents/Header/AuthHeader";
import Head from "next/head";


export default function Register() {
    return (
        <>
            <Head>
                <title>Register Page</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <AuthHeader/>
            <RegisterComponent />
        </>
    )
}
