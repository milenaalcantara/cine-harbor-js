<script setup>
const props = defineProps(["from", "to"]);
const emits = defineEmits(["next", "previous"]);
const nextPage = () => emits("next");
const previousPage = () => emits("previous");
</script>

<template>
  <nav aria-label="Page navigation">
    <ul class="pagination justify-content-center align-items-center my-5">
      <li class="page-item rounded" @click="previousPage">
        <a class="page-link" href="#">Anterior</a>
      </li>
      <span>{{ `${props.from} de ${props.to}` }}</span>
      <li class="page-item rounded" @click="nextPage"><a class="page-link" href="#">Próximo</a></li>
    </ul>
  </nav>
</template>

<style scoped>
/* Your component styles here */
nav,
ul {
  background-color: transparent;
}

li,
a {
  color: var(--vt-c-text-1);
  background-color: var(--color-background);
  border: none;
  margin: 5px;
}

li:hover,
a:hover {
  color: var(--vt-c-text-1);
  background-color: var(--color-background);
  opacity: 0.8;
}
</style>
