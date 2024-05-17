
import { QueryParams } from "@/model/query-params.model"

import { SeriesRest } from "@/service/rest/series.rest";

import { BehaviorSubject, Observable, map, take } from "rxjs";

export class SeriesService {
  constructor(
    
    private _series = new SeriesRest(),
    private _serie = new SeriesRest()
  ) {}


  private series$:BehaviorSubject<any> = new BehaviorSubject<any>([]);
  series: Observable<any> = this.series$.asObservable()

  private serie$:BehaviorSubject<any> = new BehaviorSubject<any>('');
  serie:Observable<any> = this.serie$.asObservable()
 
  getSeries():void{
    this._series.getSeries()
        .pipe(take(1))
        .subscribe({
            next:(response)=>{
                this.series$.next(response)
            }
        })
  }
  getSerieById(id:string):void{
    this._serie.getSerieById(id)
        .pipe(take(1))
        .subscribe({
            next:(response)=>{
                this.serie$.next(response)
            }
        })
  }
  

  
}