import { Link, Outlet } from "react-router-dom";
import React from 'react';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ScienceIcon from '@mui/icons-material/Science';

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
                    to= "/form"
                    label="Form" 
                    icon={<FavoriteIcon />} 
                />
            </BottomNavigation>
        </Box>
                
        <Outlet />
      </>
     );
}
 
export default Layout;