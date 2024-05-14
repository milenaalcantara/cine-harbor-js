import { QueryParams } from "@/model/query-params.model"
import api from "@/service/api-config/rx-config";
import { delay, Observable } from "rxjs";

export class MoviesRest {
  getMovies(params: QueryParams): Observable<any> {
    const url: string = `discover/movie`;
    return api.get(url, params);
  }
}