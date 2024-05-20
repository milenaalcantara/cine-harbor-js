export class Views {
  static Home(): Promise<any> {
    return import("./Home/index.vue");
  }

  static Movie(): Promise<any> {
    return import("./Movies/index.vue");
  }
  
  static Serie(): Promise<any> {
    return import("./Series/index.vue");
  }

  static Detail(): Promise<any> {
    return import("./Detail/index.vue");
  }

  static DetailsMovie(): Promise<any> {
    return import("./Movies/detail-movie.vue");
  }

  static DetailsSeries(): Promise<any> {  
    return import("./Series/detail-serie.vue");
  }

  static Favorite(): Promise<any> {
    return import("./Favorite/index.vue");
  }
}