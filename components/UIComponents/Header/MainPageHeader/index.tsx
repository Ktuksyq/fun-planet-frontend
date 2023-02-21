import { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';

import { useSelector } from "react-redux";

// import { useAppSelector } from '@/redux/hooks';
 import { selectUserData } from '@/redux/slices/user';
import { parseCookies } from 'nookies';

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
    { "title": "Cabinet", "lable": "cabinet", "href": "/cabinet/mycourses" },
    { "title": "Login", "lable": "login", "href": "/account/login" },
    { "title": "Register", "lable": "login", "href": "/account/register" },

];



export default function MainHeader(props: Props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    // const userData = useAppSelector(selectUserData);
    const userData = useSelector(selectUserData);
     console.log(userData);
    useEffect(() => {
        const { token } = parseCookies();
        setIsAuthenticated(token ? true : false);
    }, [isAuthenticated])


    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Link href="/">
                <Typography variant="h6" sx={{ my: 2 }}>
                    Fun planet
                </Typography>
            </Link>
            <Divider />
            <List>
                {navItems.map((item, index) => {
                    if (isAuthenticated && item.lable === "cabinet") {
                        return (
                            <ListItem key={index} disablePadding>
                                <ListItemButton sx={{ textAlign: 'center' }}>
                                    <Link href={item.href}>
                                        <ListItemText primary={item.title} />
                                    </Link>
                                </ListItemButton>
                            </ListItem>
                        );
                    } else {
                        return <ListItem key={index} disablePadding>
                            <ListItemButton sx={{ textAlign: 'center' }}>
                                <Link href={item.href}>
                                    <ListItemText primary={item.title} />
                                </Link>
                            </ListItemButton>
                        </ListItem>
                    }
                })}
                {/* {navItems.map((item, index) => (
                 
                    <ListItem key={index} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <Link href={item.href}>
                                <ListItemText primary={item.title} />
                            </Link>
                        </ListItemButton>
                    </ListItem>
                ))} */}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex', height: "64px" }}>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        <Link href="/">
                            Fun planet
                        </Link>
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item, key) => {
                            if (isAuthenticated && item.lable === "cabinet") {
                                console.log(isAuthenticated);
                                return <Link key={key} href={item.href}>
                                    <Button sx={{ color: '#fff' }}>
                                        {item.title}
                                    </Button>
                                </Link>
                            }
                            else if (!isAuthenticated && item.lable !== "cabinet") {
                                return <Link key={key} href={item.href}>
                                    <Button sx={{ color: '#fff' }}>
                                        {item.title}
                                    </Button>
                                </Link>
                            }
                        })}

                        {/* {navItems.map((item, key) => (
                            <Link key={key} href={item.href}>
                                <Button sx={{ color: '#fff' }}>
                                    {item.title}
                                </Button>
                            </Link>
                        ))} */}
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}