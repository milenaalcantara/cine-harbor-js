<template>
  <nav aria-label="Page navigation">
    <ul class="pagination justify-content-center align-items-center my-5">
      <li class="page-item rounded" @click="previousPage">
        <a class="page-link" href="#">Anterior</a>
      </li>
      <span>{{ `${from} de ${to}` }}</span>
      <li class="page-item rounded" @click="nextPage"><a class="page-link" href="#">Próximo</a></li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Pagination",
  props: {
    from: {
      type: Number,
      required: true,
    },
    to: {
      type: Number,
      required: true,
    },
  },
  emits: ["next", "previous"],
  methods: {
    nextPage(): void {
      this.$emit("next");
    },
    previousPage(): void {
      this.$emit("previous");
    },
  }
});
</script>

<style src="./style.scss" lang="scss"/>
