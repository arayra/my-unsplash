<script setup lang="ts">
import ButtonComponent from "./Button.vue";
import InputField from "./InputField.vue";

const props = defineProps({
  text: String,
  show: Boolean,
});
</script>

<template>
  <div
    v-if="show"
    @click.self="$emit('close')"
    class="flex justify-center items-center fixed left-0 top-0 w-screen h-screen bg-black/50 z-50"
  >
    <div class="w-5/6 max-w-lg font-poppins shadow bg-white p-10 rounded">
      <h1 class="text-xl mb-5">Add new photo</h1>
      <form @submit.prevent>
        <InputField name="title" placeholder="Image title" />
        <InputField name="link" placeholder="Image link" />
        <ButtonComponent text="Send" class="w-full" />
      </form>
    </div>
  </div>
</template>
