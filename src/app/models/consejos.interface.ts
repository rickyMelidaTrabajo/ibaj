import { Comentario } from "./comentario.interface";

export interface Consejos {
  id: string;
  autor: string;
  comentarios: Array<Comentario>;
  texto: string;
  titulo: string;
  urlImagen: string;
}
