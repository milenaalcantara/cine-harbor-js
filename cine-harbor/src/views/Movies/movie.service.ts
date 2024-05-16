//import { Course } from "@/models/courses.model";
import { QueryParams } from "@/model/query-params.model"
//import { Roles, Status } from "@/models/user.model";
import { MoviesRest } from "@/service/rest/movies.rest";
//import { CoursesRest } from "@/services/rest/courses.rest";
//import { OrganizationsRest } from "@/services/rest/organizations.rest";
//import { UsersRest } from "@/services/rest/users.rest";
//import { GoToRoute } from "@/utils/go-to.util";
//import { Messages } from "@/utils/messages.util";
//import { getUserFromStorage } from "@/utils/user-store.util";
import { BehaviorSubject, Observable, map, take } from "rxjs";

export class MoviesService {
  constructor(
    
    private _movies = new MoviesRest(),
    private _movie = new MoviesRest()
  ) {}


  private movies$:BehaviorSubject<any> = new BehaviorSubject<any>([]);
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
  

  
}