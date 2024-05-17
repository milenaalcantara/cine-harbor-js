import { QueryParams } from "@/model/query-params.model";
import { SeriesRest } from "@/service/rest/series.rest";
import { BehaviorSubject, Observable, take } from "rxjs";

export class SeriesService {
  constructor(
    private _series = new SeriesRest()
  ) {}

  private series$:BehaviorSubject<any> = new BehaviorSubject<any>([]);
  series: Observable<any> = this.series$.asObservable();
 
  getSeries(params: QueryParams): void {
    this._series.getSeries(params)
      .pipe(take(1))
      .subscribe({
        next:(response) => {
          this.series$.next(response);
        }
      });
  }
}