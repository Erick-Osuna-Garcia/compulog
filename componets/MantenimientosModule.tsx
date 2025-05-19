import * as React from 'react';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

export default function MantenimientosModule({ user }: { user: any }) {
  const mantenimientos = []; // Aquí iría el fetch a tu API/Prisma

  return (
    <div>
      <Typography variant="h5" gutterBottom>Historial de Mantenimientos</Typography>
      {user.rol === 'admin' && (
        <Button variant="contained" color="primary">Agregar mantenimiento</Button>
      )}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Equipo</TableCell>
            <TableCell>Tipo</TableCell>
            <TableCell>Descripción</TableCell>
            <TableCell>Fecha</TableCell>
            <TableCell>Técnico</TableCell>
            {user.rol === 'admin' && <TableCell>Acciones</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Aquí mapea los mantenimientos */}
        </TableBody>
      </Table>
    </div>
  );
}