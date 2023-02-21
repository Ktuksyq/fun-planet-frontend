import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';



interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    
}

const drawerWidth = 240;
const navItems = [
    { "title": "My courses", "href": "/cabinet/mycourses" },
    { "title": "All courses", "href": "/cabinet/allcourses" },
    { "title": "Games/Tests", "href": "/cabinet/gamesandtests" },
    { "title": "Profile", "href": "/cabinet/profile" },

];


export default function AuthHeader(props: Props) {
    return (
        <Box sx={{ display: 'flex', height: "64px" }}>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar>

                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, }}
                    >
                        <Link href="/">
                            Fun planet
                        </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

