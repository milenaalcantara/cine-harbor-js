import router from "@/router";

export class GoToRoute {
  redirectToPage(page: string, routeParams?: any): void {
    if (routeParams) {
      router.push({ name: page, params: routeParams });
    } else {
      router.push({ name: page });
    }
  }
}