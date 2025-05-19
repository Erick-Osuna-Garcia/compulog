import * as React from 'react';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

export default function PrestamosModule({ user }: { user: any }) {
  const prestamos = []; // Aquí iría el fetch a tu API/Prisma

  return (
    <div>
      <Typography variant="h5" gutterBottom>Control de Préstamos</Typography>
      {user.rol === 'admin' && (
        <Button variant="contained" color="primary">Registrar préstamo</Button>
      )}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Equipo</TableCell>
            <TableCell>Usuario</TableCell>
            <TableCell>Fecha Préstamo</TableCell>
            <TableCell>Fecha Devolución</TableCell>
            <TableCell>Estado</TableCell>
            {user.rol === 'admin' && <TableCell>Acciones</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Aquí mapea los préstamos */}
        </TableBody>
      </Table>
    </div>
  );
}