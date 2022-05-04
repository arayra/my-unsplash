<script setup lang="ts">
const props = defineProps({
  name: String,
  placeholder: String,
});
</script>

<template>
  <input
    type="text"
    :name="name"
    :placeholder="placeholder"
    class="w-full mb-5 bg-white focus:bg-green-100 focus:border-green-600 focus:outline-none border-2 border-gray-200 p-2 rounded"
  />
</template>
