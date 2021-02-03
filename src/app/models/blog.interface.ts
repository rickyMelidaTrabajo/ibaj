import { Comentario } from "./comentario.interface";

export interface Blog {
  autor: string;
  comentarios: Array<Comentario>;
  fecha: Date;
  id: number;
  texto: string;
  titulo: string;
  urlImagen: string;
}
