import { QueryParams } from "@/model/query-params.model"
import api from "@/service/api-config/rx-config";
import { delay, Observable } from "rxjs";

export class MoviesRest {
  getMovies(): Observable<any> {
    const url: string = `/movie`;
    return api.get(url);
  }
}