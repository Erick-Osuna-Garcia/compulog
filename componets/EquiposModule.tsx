// components/EquiposModule.tsx
import * as React from 'react';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';

export default function EquiposModule({ user }: { user: any }) {
  const [equipos, setEquipos] = React.useState<any[]>([]);
  const [open, setOpen] = React.useState(false);
  const [form, setForm] = React.useState({
    nombre_equipo: '',
    tipo_equipo: '',
    marca: '',
    modelo: '',
    estado: '',
    ubicacion: '',
    usuario: '',
  });

  // Cargar equipos al montar
  React.useEffect(() => {
    fetch('/api/equipos')
      .then(res => res.json())
      .then(setEquipos);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = async () => {
    await fetch('/api/equipos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    setOpen(false);
    setForm({
      nombre_equipo: '',
      tipo_equipo: '',
      marca: '',
      modelo: '',
      estado: '',
      ubicacion: '',
      usuario: '',
    });
    // Recargar equipos
    fetch('/api/equipos')
      .then(res => res.json())
      .then(setEquipos);
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>Gestión de Equipos</Typography>
      {user.rol === 'admin' && (
        <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
          Agregar equipo
        </Button>
      )}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Agregar equipo</DialogTitle>
        <DialogContent>
          <TextField margin="dense" label="Nombre" name="nombre_equipo" fullWidth value={form.nombre_equipo} onChange={handleChange} />
          <TextField margin="dense" label="Tipo" name="tipo_equipo" fullWidth value={form.tipo_equipo} onChange={handleChange} />
          <TextField margin="dense" label="Marca" name="marca" fullWidth value={form.marca} onChange={handleChange} />
          <TextField margin="dense" label="Modelo" name="modelo" fullWidth value={form.modelo} onChange={handleChange} />
          <TextField margin="dense" label="Estado" name="estado" fullWidth value={form.estado} onChange={handleChange} />
          <TextField margin="dense" label="Ubicación" name="ubicacion" fullWidth value={form.ubicacion} onChange={handleChange} />
          <TextField margin="dense" label="Usuario" name="usuario" fullWidth value={form.usuario} onChange={handleChange} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancelar</Button>
          <Button onClick={handleAdd} variant="contained">Guardar</Button>
        </DialogActions>
      </Dialog>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Tipo</TableCell>
            <TableCell>Marca</TableCell>
            <TableCell>Modelo</TableCell>
            <TableCell>Estado</TableCell>
            <TableCell>Ubicación</TableCell>
            <TableCell>Usuario</TableCell>
            {user.rol === 'admin' && <TableCell>Acciones</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {equipos.map((eq, idx) => (
            <TableRow key={idx}>
              <TableCell>{eq.nombre_equipo}</TableCell>
              <TableCell>{eq.tipo_equipo}</TableCell>
              <TableCell>{eq.marca}</TableCell>
              <TableCell>{eq.modelo}</TableCell>
              <TableCell>{eq.estado}</TableCell>
              <TableCell>{eq.ubicacion}</TableCell>
              <TableCell>{eq.usuario}</TableCell>
              {user.rol === 'admin' && <TableCell>{/* Acciones editar/eliminar */}</TableCell>}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}