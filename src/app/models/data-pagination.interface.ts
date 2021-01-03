import { NumberValueAccessor } from "@angular/forms";

export interface DataPagination {
  numArticles: number;
  cantPages: number;
  pageActual: number;
  pageSolicitada: number;
}
