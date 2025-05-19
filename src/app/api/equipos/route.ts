import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const equipos = await prisma.equipo.findMany({
    include: {
      ubicacion: true,
      usuario: true,
    },
  })
  return NextResponse.json(equipos)
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const data = await req.json();

  // Buscar usuario por nombre
  const usuario = await prisma.usuario.findFirst({ where: { nombre: data.usuario } });
  // Buscar ubicación por nombre
  const ubicacion = await prisma.ubicacion.findFirst({ where: { oficina: data.ubicacion } });

  const equipo = await prisma.equipo.update({
    where: { id_equipo: Number(params.id) },
    data: {
      nombre_equipo: data.nombre_equipo,
      tipo_equipo: data.tipo_equipo,
      marca: data.marca,
      modelo: data.modelo,
      estado: data.estado,
      id_ubicacion: ubicacion?.id_ubicacion,
      id_usuario: usuario?.id_usuario,
      numero_serie: data.numero_serie ?? '',
      sistema_operativo: data.sistema_operativo ?? '',
      procesador: data.procesador ?? '',
      ram: data.ram ?? '',
      disco_duro: data.disco_duro ?? '',
      fecha_compra: data.fecha_compra ? new Date(data.fecha_compra) : new Date(),
    },
  });
  return NextResponse.json(equipo);
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  await prisma.equipo.delete({
    where: { id_equipo: Number(params.id) },
  });
  return NextResponse.json({ ok: true });
}