import { QueryParams } from "@/model/query-params.model";
import { MoviesRest } from "@/service/rest/movies.rest";
import { BehaviorSubject, Observable, take } from "rxjs";

export class MoviesService {
  constructor(
    private _movies = new MoviesRest()
  ) {}

  private movies$:BehaviorSubject<any> = new BehaviorSubject<any>([]);
  movies: Observable<any> = this.movies$.asObservable();
 
  getMovies(params: QueryParams): void {
    this._movies.getMovies(params)
      .pipe(take(1))
      .subscribe({
        next:(response) => {
          this.movies$.next(response);
        }
      });
  }
}