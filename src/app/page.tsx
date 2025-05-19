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
import EquiposModule from '../../componets/EquiposModule';
import UbicacionesModule from '../../componets/UbicacionesModule';
import UsuariosModule from '../../componets/UsuariosModule';
import MantenimientosModule from '../../componets/MantenimientosModule';
import PrestamosModule from '../../componets/PrestamosModule';
import ReportesModule from '../../componets/ReportesModule';


// Ancho del Drawer
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
  { key: 'equipos', text: 'Equipos', icon: <FolderIcon /> },
  { key: 'ubicaciones', text: 'Ubicaciones', icon: <DescriptionIcon /> },
  { key: 'usuarios', text: 'Usuarios', icon: <DescriptionIcon /> },
  { key: 'mantenimientos', text: 'Mantenimientos', icon: <DescriptionIcon /> },
  { key: 'prestamos', text: 'Préstamos', icon: <DescriptionIcon /> },
  { key: 'reportes', text: 'Reportes', icon: <DescriptionIcon /> },
];

export default function DashboardPage() {
  const [selected, setSelected] = React.useState('equipos');
  // Simulación de usuario logueado
  const [user, setUser] = React.useState({ rol: 'admin', nombre: 'Admin UwU' }); // o 'consulta'

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
              <ListItem key={item.key} disablePadding>
                <ListItemButton
                  selected={selected === item.key}
                  onClick={() => setSelected(item.key)}
                  sx={{ color: 'primary.contrastText' }}
                >
                  <ListItemIcon sx={{ color: 'primary.contrastText' }}>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Typography variant="h4" gutterBottom>
            Bienvenido, {user.nombre}
          </Typography>
          {selected === 'equipos' && <EquiposModule user={user} />}
          {selected === 'ubicaciones' && <UbicacionesModule user={user} />}
          {selected === 'usuarios' && <UsuariosModule user={user} />}
          {selected === 'mantenimientos' && <MantenimientosModule user={user} />}
          {selected === 'prestamos' && <PrestamosModule user={user} />}
          {selected === 'reportes' && <ReportesModule user={user} />}
        </Box>
      </Box>
    </ThemeProvider>
  );
}