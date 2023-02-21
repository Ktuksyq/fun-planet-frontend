import * as React from 'react';
import { Container, CssBaseline, Box, Avatar,Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import RegisterForm from './RegisterForm';


export default function RegisterComponent() { 
    return (
        <Container  component="main" maxWidth="xs">
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
                    Sign up
                </Typography>
                {/* Form */}
                <RegisterForm/>
            </Box>
        </Container>
    );
}