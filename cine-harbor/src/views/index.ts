export class Views {
  static Home(): Promise<any> {
    return import("./Home/home.vue");
  }

  static Movie(): Promise<any> {
    return import("./Movie/movie.vue");
  }
  
  static Serie(): Promise<any> {
    return import("./Serie/serie.vue");
  }

  static Detail(): Promise<any> {
    return import("./Detail/detail.vue");
  }

  static Favorite(): Promise<any> {
    return import("./Favorite/favorite.vue");
  }
}