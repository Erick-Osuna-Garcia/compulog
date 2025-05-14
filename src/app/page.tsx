'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DescriptionIcon from '@mui/icons-material/Description';
import FolderIcon from '@mui/icons-material/Folder';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const drawerWidth = 240;

// Define tu paleta personalizada
const theme = createTheme({
  palette: {
    primary: {
      main: '#6366f1', // Indigo-500 de Tailwind
      dark: '#8b5cf6', // Purple-500 de Tailwind
      contrastText: '#fff',
    },
    background: {
      default: '#4f6dab', // bg-gray-50
      paper: '#3d4b9b',
    },
  },
});

const navItems = [
  { text: 'Categorias', icon: <FolderIcon /> },
  { text: 'Comprar', icon: <DescriptionIcon /> },
  { text: 'Inventario', icon: <DescriptionIcon /> },
];

export default function DashboardPage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', bgcolor: 'background.default' }}>
        <AppBar
          position="fixed"
          color="primary"
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            background: 'linear-gradient(to right, #6366f1, #8b5cf6)', // Gradiente igual al layout
          }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap>
              UwU Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: 'border-box',
              bgcolor: 'primary.main',
              color: 'primary.contrastText',
              background: 'linear-gradient(to bottom, #6366f1, #8b5cf6)',
            },
          }}
        >
          <Toolbar />
          <List>
            {navItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton sx={{ color: 'primary.contrastText' }}>
                  <ListItemIcon sx={{ color: 'primary.contrastText' }}>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3, ml: `${drawerWidth}px` }}>
          <Toolbar />
          <Typography variant="h4">Bienvenido al dashboard UwU</Typography>
          <Typography>Selecciona una opción del menú.</Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}