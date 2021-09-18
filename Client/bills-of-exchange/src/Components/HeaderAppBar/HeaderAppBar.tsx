import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const linkStyle = {
    color: 'inherit',
    textDecoration: 'none'
}

const HeaderAppBar: React.FC = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        <Link to='/' style={linkStyle}>
                            Bills of Exchange
                        </Link>
                    </Typography>
                    <Button color="inherit" style={{ marginRight: '5%' }}>
                        <Link to='/osoby' style={linkStyle}>
                            Osoby
                        </Link>
                    </Button>
                    <Button color="inherit">
                        <Link to='/smenky' style={linkStyle}>
                            Smenky
                        </Link>
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default HeaderAppBar;