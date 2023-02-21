import React from 'react'
import { Box, Container, Typography } from '@mui/material';
import CabinetLayout from '@/layouts/CabinetLayou';



export default function gamesandtests() {
    return (
            <CabinetLayout>
                <Container>
                    <Box sx={{ height: "90vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Typography align='center' sx={{ fontSize: "100px" }}>
                            Games/tests page
                        </Typography>
                    </Box>
                </Container>
            </CabinetLayout>
    )
}