import * as React from 'react';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

export default function UsuariosModule({ user }: { user: any }) {
  const usuarios = []; // Aquí iría el fetch a tu API/Prisma

  return (
    <div>
      <Typography variant="h5" gutterBottom>Gestión de Usuarios</Typography>
      {user.rol === 'admin' && (
        <Button variant="contained" color="primary">Agregar usuario</Button>
      )}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Correo</TableCell>
            <TableCell>Departamento</TableCell>
            <TableCell>Rol</TableCell>
            {user.rol === 'admin' && <TableCell>Acciones</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Aquí mapea los usuarios */}
        </TableBody>
      </Table>
    </div>
  );
}