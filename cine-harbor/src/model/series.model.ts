export class Serie {
  constructor(
    public id?:number,
    public backdrop_path?: string,
    public original_language?: string,
    public original_name?: string,
    public overview?: string,
    public popularity?: number,
    public poster_path?: string,
    public first_air_date?: Date,
    public name?: string,
    public vote_average?: number,
    public vote_count?: number
  ) {}
}