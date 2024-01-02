// pages/api/comentarios.js
import { addComentario } from '../../utils/comercios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { comercioId, texto, usuario } = req.body;

    try {


      const user = users.find((comercio) => comercio.CIF === params.CIF);


      const comercio = user;
      const nuevoComentario = {
        id: comercio.comentarios.length + 1,
        texto,
        usuario,
      };




      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error al agregar comentario', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
}