import { Link, Outlet } from "react-router-dom";
import React from 'react';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Layout = () => {
    const [value, setValue] = React.useState(-1);
    return ( 
        <>
        <Box sx={{ width: 500, height: 100 }}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                setValue(newValue);
                }}
            >
                <BottomNavigationAction 
                    component={Link}
                    to= "/nav"
                    label="Nav" 
                    icon={<RestoreIcon />} 
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