import { App } from "vue";

import { addIcons, OhVueIcon } from "oh-vue-icons";
import * as HiIcons from "oh-vue-icons/icons/hi";

const icons = Object.values({
  ...HiIcons,
});
addIcons(...icons);
export default function setIcons(app: App): void {
  app.component("v-icon", OhVueIcon);
}
