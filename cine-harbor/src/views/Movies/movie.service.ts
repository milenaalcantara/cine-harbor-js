import { QueryParams } from "@/model/query-params.model";
import { MoviesRest } from "@/service/rest/movies.rest";
import { BehaviorSubject, Observable, take } from "rxjs";

export class MoviesService {
  constructor(
<<<<<<< HEAD:cine-harbor/src/views/Movie/movie.service.ts
    private _movies = new MoviesRest()
=======
    
    private _movies = new MoviesRest(),
    private _movie = new MoviesRest()
>>>>>>> feature/typesconfig:cine-harbor/src/views/Movies/movie.service.ts
  ) {}

  private movies$:BehaviorSubject<any> = new BehaviorSubject<any>([]);
<<<<<<< HEAD:cine-harbor/src/views/Movie/movie.service.ts
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
=======
  movies: Observable<any> = this.movies$.asObservable()

  private movie$:BehaviorSubject<any> = new BehaviorSubject<any>('');
  movie:Observable<any> = this.movie$.asObservable()
 
  getMovies():void{
    this._movies.getMovies()
        .pipe(take(1))
        .subscribe({
            next:(response)=>{
                this.movies$.next(response)
            }
        })
  }
  getMovieById(id:string):void{
    this._movie.getMovieById(id)
        .pipe(take(1))
        .subscribe({
            next:(response)=>{
                this.movie$.next(response)
            }
        })
  }
  

  
>>>>>>> feature/typesconfig:cine-harbor/src/views/Movies/movie.service.ts
}