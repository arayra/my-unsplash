<script setup lang="ts">
const props = defineProps({
  text: String,
});
</script>

<template>
  <button
    class="text-white bg-green-600 hover:bg-green-700 transition rounded py-2 px-5"
  >
    {{ text }}
  </button>
</template>
