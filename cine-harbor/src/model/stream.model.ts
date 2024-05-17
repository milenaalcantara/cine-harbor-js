export class Stream {
  constructor(
    public id?:number,
    public backdrop_path?: string,
    public original_language?: string,
    public original_name?: string,
    public original_title?:string,
    public overview?: string,
    public popularity?: number,
    public poster_path?: string,
    public first_air_date?: string,
    public release_date?:string,
    public name?: string,
    public title?:string,
    public video?:boolean,
    public vote_average?:number,
    public vote_count?:number
  ) {}
}


export class StreamDetail {
  constructor(
    public id?: number,
    public title?: string,
    public name?: string,
    public vote_average?: number,
    public overview?: string,
    public release_date: string = "",
    public first_air_date: string = "",
    public runtime: string = "",
    public number_of_episodes: string = "",
    public backdrop_path: string = "",
  ) {}
}