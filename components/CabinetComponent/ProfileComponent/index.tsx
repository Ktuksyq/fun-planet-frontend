import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import { Box, Container, Typography, TextField, Grid ,Button} from '@mui/material';
import axios from 'axios';
import { parseCookies,destroyCookie  } from 'nookies';
import { UserApi } from '@/api';
export default function ProfileComponent() {
    const [userName, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const router = useRouter();


    function handleUsernameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value);
    }
    function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value);
    }

    const getMe = async (token: string) => {
        try {
            const {name,email} = await UserApi.getme(token);
            setUsername(name);
            setEmail(email);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const {token} = parseCookies();
        getMe(token);
    }, [])

const delteCookie=()=>{
    const cookies = parseCookies();
    const token = cookies.token;
     destroyCookie(null,'token', {
        path: '/',
      });
     destroyCookie(null,'data', {
        path: '/',
      });
    router.push("/account/login");
}
    return (
        <Container sx={{ padding: "25px 0", display: "flex", justifyContent: "center" }}>
            <Box sx={{ maxWidth: "750px", width: "100%", padding: "35px", backgroundColor: "#fff", borderRadius: "15px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Box sx={{ width: "100%" }}>
                    <Typography sx={{marginBottom:"15px"}}>Personal data</Typography>
                    <Grid container justifyContent="flex-start" sx={{ width: "100%" }} spacing={{ xs: 1, sm: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        <Grid item xs={6} sx={{ width: "100%" }}>
                            <TextField
                                sx={{ width: "100%", }}
                                id="outlined-required"
                                label="Username"
                                
                                value={userName}
                                onChange={handleUsernameChange}
                            />
                        </Grid>
                        <Grid item xs={6} sx={{ width: "100%" }}>
                            <TextField
                                sx={{ width: "100%", }}
                                id="outlined-required"
                                label="Email"
                                value={email}
                                onChange={handleEmailChange}
                            />
                        </Grid>
                        <Grid item xs={6}sx={{ width: "100%" }}>
                        <Button onClick={delteCookie} sx={{marginBottom:"15px"}}>Вийти</Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    )
}
