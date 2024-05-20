import { Observable } from "rxjs";
import { QueryParams } from "@/model/query-params.model"
import api from "@/service/api-config/rx-config";

export class StreamRest {
  getAllStreams(params: QueryParams): Observable<any> {
    const url: string = `trending/all`;
    return api.get(url, params);
  }

  getStreamById(type: string, id: string): Observable<any> {
    const url: string = `${type}/${id}`;
    return api.get(url);
  }

  getTrailerUrlById(type: string, id: string): Observable<any> {
    const url: string = `${type}/${id}/videos`;
    return api.get(url);
  }
}