import { defineAsyncComponent as lazyLoad } from "vue";

export class Components {
  static Card(): any {
    return lazyLoad(() => import("./CardComponent.vue"));
  }

  static ContentList(): any {
    return lazyLoad(() => import("./ContentListComponent.vue"));
  }

  static HeaderNavigation(): any {
    return lazyLoad(() => import("./HeaderNavigation.vue"));
  }

  static Pagination(): any {
    return lazyLoad(() => import("./PaginationComponent.vue"));
  }
}