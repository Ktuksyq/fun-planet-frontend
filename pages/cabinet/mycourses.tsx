import React from 'react'
import { Box, Container, Typography } from '@mui/material';
import CabinetLayout from '@/layouts/CabinetLayou';
import { GetServerSideProps } from 'next';



export default function mycourses() {
    return (
        <>
            <CabinetLayout>
                <Container>
                    <Box sx={{ height: "90vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Typography align='center' sx={{ fontSize: "100px" }}>
                            Courses page
                        </Typography>
                    </Box>
                </Container>
            </CabinetLayout>
        </>
    )
}

