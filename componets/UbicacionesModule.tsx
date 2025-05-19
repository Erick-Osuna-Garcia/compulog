import * as React from 'react';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

export default function UbicacionesModule({ user }: { user: any }) {
  const ubicaciones = []; // Aquí iría el fetch a tu API/Prisma

  return (
    <div>
      <Typography variant="h5" gutterBottom>Gestión de Ubicaciones</Typography>
      {user.rol === 'admin' && (
        <Button variant="contained" color="primary">Agregar ubicación</Button>
      )}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Edificio</TableCell>
            <TableCell>Piso</TableCell>
            <TableCell>Oficina</TableCell>
            {user.rol === 'admin' && <TableCell>Acciones</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Aquí mapea las ubicaciones */}
        </TableBody>
      </Table>
    </div>
  );
}