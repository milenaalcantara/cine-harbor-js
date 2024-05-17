import { defineAsyncComponent as lazyLoad } from "vue";

export class Components {
  static Card(): any {
    return lazyLoad(() => import("./Card/card.vue"));
  }

  static ContentList(): any {
    return lazyLoad(() => import("./ContentList/contentList.vue"));
  }

  static HeaderNavigation(): any {
    return lazyLoad(() => import("./HeaderNavigation/header-navigation.vue"));
  }

  static Pagination(): any {
    return lazyLoad(() => import("./Pagination/pagination.vue"));
  }
}