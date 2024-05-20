import { 
  BehaviorSubject,
  Observable,
  take
} from "rxjs";
import { QueryParams } from "@/model/query-params.model";
import { StreamRest } from "@/service/rest/streams.rest";

export class StreamService {
  constructor(
    private _streams = new StreamRest()
  ) {}

  private streams$: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  streams: Observable<any> = this.streams$.asObservable();

  private stream$: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  stream: Observable<any> = this.stream$.asObservable();

  private trailerUrl$: BehaviorSubject<any> = new BehaviorSubject<any>(""); 
  trailerUrl: Observable<any> = this.trailerUrl$.asObservable();
 
  getAllStreams(params: QueryParams): void {
    this._streams.getAllStreams(params)
      .pipe(take(1))
      .subscribe({
        next:(response) => {
          this.streams$.next(response);
        }
      });
  }

  getStreamById(type: string, id: string): void {
    this._streams.getStreamById(type, id)
      .pipe(take(1))
      .subscribe({
        next:(response) => {
          this.streams$.next(response);
        }
      });
  }

  getTrailerUrlById(type: string, id: string) {
    this._streams.getTrailerUrlById(type, id)
      .pipe(take(1))
      .subscribe({
        next:(response) => {
          this.trailerUrl$.next(response);
        }
      });
  }
}