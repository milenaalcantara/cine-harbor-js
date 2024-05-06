import { App } from "vue";
import { Components } from "@/components";

export default function setComponent(app: App): void {
  app.component("card", Components.Card());
  app.component("content-list", Components.ContentList());
  app.component("nav-header", Components.HeaderNavigation());
  app.component("pagination", Components.Pagination());
}
