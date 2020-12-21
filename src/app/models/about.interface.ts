import { Objetivos } from "./objetivos.interface";
import { Servicios } from "./servicios.interface";

export interface About {
  data: {
    creencias: string;
    declaracionDeFe: string;
    nosotros: string;
    objetivos: Objetivos;
    servicios: Servicios
  }



}
