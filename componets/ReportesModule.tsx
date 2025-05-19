import * as React from 'react';
import Typography from '@mui/material/Typography';

export default function ReportesModule({ user }: { user: any }) {
  return (
    <div>
      <Typography variant="h5" gutterBottom>Reportes e Informes</Typography>
      {/* Aquí puedes agregar filtros, gráficas, exportar a Excel, etc. */}
      <Typography>Próximamente: inventario general, equipos por ubicación/estado, historial de mantenimientos, alertas, etc.</Typography>
    </div>
  );
}