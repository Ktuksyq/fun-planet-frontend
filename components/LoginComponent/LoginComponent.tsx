import { useState } from 'react';
import Head from 'next/head';
import LinkNext from 'next/link';
import { useRouter } from 'next/router';
import { setCookie } from 'nookies';

import { Avatar, Box, Container, CssBaseline, Typography, TextField, Button, Alert,Grid,Link } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { UserApi } from '@/api';
import { LoginUserData } from '@/api/types';
import { useAppDipatch } from '@/redux/hooks';
import { setUserData } from '@/redux/slices/user';



export default function LoginComponent() {
    const [submit, setSubmit] = useState<boolean>(false);
    const [isError,setIsError] = useState<boolean>(false);
    const [errorMsg,setErrorMsg] = useState<string>("");
    const router = useRouter();
    const dispatch = useAppDipatch();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        Login({
            username: data.get('username') as string,
            password: data.get('password') as string,
        });
    };

    const Login = async (loginData: LoginUserData) => {
        try {
            setSubmit(true)
            const {access_token} = await UserApi.login(loginData);
            const data = await UserApi.getme(access_token);
            
            setCookie(null, "token", access_token, {
                maxAge: 600,
                path: "/"
            });
            // setCookie(null, "data", JSON.stringify(data), {
            //     maxAge: 600,
            //     path: "/"
            // });
            dispatch(setUserData(data));
            setSubmit(false);
            setIsError(false);
            setErrorMsg("");
            router.push("/cabinet/mycourses");
        } catch (error:any) {
            setIsError(true);
            setErrorMsg(error.response.data.message as string); 
            console.log(error);
            console.log(errorMsg);
            setSubmit(false)
            
        }
    }
    return (
        <>
            <Head>
                <title>Login Page</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                        sx={{backgroundColor:"#fff", borderRadius:"4px"}}
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="User name"
                            name="username"
                            autoComplete="username"
                            autoFocus
                        />
                        <TextField
                        sx={{backgroundColor:"#fff", borderRadius:"4px"}}
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        {isError && <Alert severity="error">{errorMsg}</Alert>}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            disabled={submit}
                        >
                            Sign In
                        </Button>
                        <Grid container justifyContent="flex-end">
                        <Grid item>
                            <LinkNext href="/account/register" passHref legacyBehavior>
                                <Link >                  
                                     Don`t have an account? Sign Up
                                </Link>
                            </LinkNext>
                        </Grid>
                    </Grid>
                    </Box>
                </Box>
            </Container>
        </>
    )
}
