import api from "@/service/api-config/rx-config";
import { QueryParams } from "@/model/query-params.model"
import { Observable } from "rxjs";

export class SeriesRest {
  getSeries(params: QueryParams): Observable<any> {
    const url: string = `discover/tv`;
    return api.get(url, params);
  }
  
  getSerieById(id: string):Observable<any>{
    const url: string =`/tv/${id}`;
    return api.get(url)
  }
}
