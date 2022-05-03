<script setup lang="ts">
const images = [
  {
    name: "Svelte code example 4613?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90b y1wYWdlfHx8fGVufDB",
    link: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    name: "Made with Canon 5d Mark III and loved analog lens, Leica APO Macro Elmarit-R 2.8 / 100mm (Year: 1993)",
    link: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    name: "HTLM / PHP / JavaScript program code – Web development",
    link: "https://images.unsplash.com/photo-1630476387426-52c6e0b14e50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    name: "Web development",
    link: "https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    name: "Programming is part of my life, huge part of my life",
    link: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
];
const currentYear = new Date().getFullYear();
</script>

<template>
  <div class="max-w-screen-xl mx-auto">
    <nav
      class="fixed top-0 w-full max-w-screen-xl bg-white grid grid-cols-12 font-poppins py-6 px-6 md:text-sm border-b-2 z-50"
      id="images"
    >
      <div
        class="flex justify-start md:justify-center items-center logo col-span-6 md:col-span-2"
      >
        <img src="./assets/my_unsplash_logo.svg" alt="My Unsplash Logo" />
      </div>
      <div
        class="flex justify-end md:justify-start items-center font-poppins col-span-6 md:col-span-7 lg:col-span-8 px-4"
        id="search"
      >
        <input
          type="search"
          placeholder="Search by name"
          class="px-3 py-1.5 text-gray-700 w-full md:w-60 bg-white border-2 border-solid border-gray-300 transition-[width] duration-200 focus:border-green-600 focus:outline-none focus:w-full rounded"
        />
      </div>
      <div
        class="hidden md:flex justify-center items-center col-span-3 lg:col-span-2 w-full"
        id="add-photo"
      >
        <button
          class="text-white bg-green-600 hover:bg-green-700 transition rounded py-2 px-8"
        >
          Add a photo
        </button>
        <Teleport to="body">
          <button
            class="fixed right-8 bottom-8 rounded-full py-4 px-4 bg-green-600 md:hidden z-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-plus"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
        </Teleport>
      </div>
    </nav>
    <section
      class="flex flex-wrap mt-28 font-poppins text-sm leading-6"
      id="images"
    >
      <div
        class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 h-full p-2"
        v-for="image in images"
        :key="image.link"
      >
        <div class="relative overflow-hidden">
          <img
            class="rounded-lg object-cover h-80 w-full mx-auto hover:cursor-zoom-in hover:brightness-75 peer"
            :src="image.link"
            :alt="image.name"
          />
          <div
            class="absolute left-0 -bottom-96 hover:bottom-0 peer-hover:bottom-0 transition-all z-10 w-full h-fit max-h-full p-2 overflow-hidden text-black bg-gray-100/90"
            id="image-hover"
          >
            <span class="break-words">{{ image.name }}</span>
          </div>
        </div>
      </div>
    </section>
    <div id="pop-up-box"></div>
    <section class="text-center font-poppins my-12" id="footer">
      <span class="text-gray-700"
        >{{ currentYear }}
        <a
          href="https://github.com/irlanvila"
          class="text-green-700 hover:bg-green-200 underline px-1"
          >Irlan Arvila</a
        ></span
      >
    </section>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
