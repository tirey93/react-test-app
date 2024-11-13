import { Link, Outlet } from "react-router-dom";
import React from 'react';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ScienceIcon from '@mui/icons-material/Science';
import LoginIcon from '@mui/icons-material/Login';

const Layout = () => {
    const [value, setValue] = React.useState(-1);
    return ( 
        <>
        <Box sx={{ height: 100 }}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(_event, newValue) => {
                setValue(newValue);
                }}
            >
                <BottomNavigationAction 
                    component={Link}
                    to= "/dropdown"
                    label="Dropdown" 
                    icon={<ScienceIcon />} 
                />
                <BottomNavigationAction 
                    component={Link}
                    to= "/fetch"
                    label="Fetch" 
                    icon={<ScienceIcon />} 
                />
                <BottomNavigationAction 
                    component={Link}
                    to= "/webwork"
                    label="Webwork" 
                    icon={<ScienceIcon />} 
                />
                <BottomNavigationAction 
                    component={Link}
                    to= "/pesel"
                    label="Pesel" 
                    icon={<FavoriteIcon />} 
                />
                <BottomNavigationAction 
                    component={Link}
                    to= "/login"
                    label="Login" 
                    icon={<LoginIcon />} 
                />
            </BottomNavigation>
        </Box>
                
        <Outlet />
      </>
     );
}
 
export default Layout;