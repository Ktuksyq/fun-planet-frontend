import {useState} from 'react'

import  LinkNext  from 'next/link';
import { useRouter } from 'next/router';

import { RegisterUserData } from '@/api/types';
import { UserApi } from '@/api';
import { useAppDipatch } from '@/redux/hooks';
import { setUserData } from '@/redux/slices/user';



import { Box, Grid, TextField, FormControl, InputLabel, Select, MenuItem, Button, Link, Alert } from '@mui/material';

export default function RegisterForm() {
    const [submit, setSubmit] = useState<boolean>(false);
    const [role, setRole] = useState<string>("Student");
    const [isError,setIsError] = useState<boolean>(false);
    const [errorMsg,setErrorMsg] = useState<string>("");
    const router = useRouter();
    const dispatch = useAppDipatch();

    const handleChange = (event:any) => {
        setRole(event.target.value);
    };
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        if(data.get('username') !== "" && data.get('email') !== "" && data.get('password') !== ""){
            setIsError(false);
            setErrorMsg("");
            Register({
                username: data.get('username') as string,
                email: data.get('email') as string,
                password: data.get('password') as string,
                type:role as string,
            });
        }else{
            setIsError(true);
            setErrorMsg("Fill empty fields");
        }
        
    };

    const Register = async (registerData: RegisterUserData) => {
        try {
            setSubmit(true)
            const data = await UserApi.register(registerData);
            dispatch(setUserData(data));       
            setSubmit(false)
            setIsError(false);
            setErrorMsg("");
            router.push("/account/login");
        } catch (error:any) {
            setSubmit(false)
            setIsError(true);
            setErrorMsg(error.response.data.message as string); 
            console.log(error);
        }
    }
  return (
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}  >
                            <TextField
                            sx={{backgroundColor:"#fff", borderRadius:"4px"}}
                                required
                                fullWidth
                                id="username"
                                label="User Name"
                                name="username"
                                autoComplete="family-name"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            sx={{backgroundColor:"#fff", borderRadius:"4px"}}
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                        <FormControl sx={{width:"100%",backgroundColor:"#fff", borderRadius:"4px"}}>
                        <InputLabel id="rolee">Role</InputLabel>
                            <Select
                           
                                labelId="rolee"
                                id="role"
                                value={role}
                                label="Role"
                                defaultValue={role}
                                onChange={handleChange}
                                
                            >
                                <MenuItem value={"Student"}>Student</MenuItem>
                                <MenuItem value={"Teacher"}>Teacher</MenuItem>

                            </Select>
                        </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            sx={{backgroundColor:"#fff", borderRadius:"4px"}}
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                            />
                        </Grid>
                        {isError && <Grid item xs={12} ><Alert severity="error">{errorMsg}</Alert></Grid>}
                    </Grid>
                    
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        disabled={submit}
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <LinkNext href="/account/login" passHref legacyBehavior>
                                <Link >
                                    Already have an account? Sign in
                                </Link>
                            </LinkNext>
                        </Grid>
                    </Grid>
        </Box>
  )
}
