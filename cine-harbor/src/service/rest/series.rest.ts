import { QueryParams } from "@/model/query-params.model"
import api from "@/service/api-config/rx-config";
import { Observable } from "rxjs";

export class SeriesRest {
  getSeries(params: QueryParams): Observable<any> {
    const url: string = `discover/tv`;
    return api.get(url, params);
  }
}