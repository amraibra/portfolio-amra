<template>
  <div class="bg-white min-h-screen flex flex-col font-customFont scrollable-container">
    <header
      class="flex justify-between items-center w-full max-w-screen-xl text-black text-xl p-8 pb-5 border-lightest-blue border-b-2 mx-auto"
    >
      <a href="/home" class="text-dark-blue text-2xl font-bold">
        Portfolio 2025
      </a>
      <div class="flex space-x-4">
        <button class="bg-light-blue rounded-lg p-3 text-white text-sm hover:bg-lightest-blue">
          Contact
        </button>
        <a
          class="bg-light-blue rounded-lg p-3 text-white text-sm hover:bg-lightest-blue"
          href="/projects"
        >
          Projects
        </a>
        <button class="bg-light-blue rounded-lg p-3 text-white text-sm hover:bg-lightest-blue">
          Resume
        </button>
      </div>
      <div class="flex space-x-4">
        <a
          href="https://www.linkedin.com/in/amra-ibrahimovic-704791173/"
          target="_blank"
          class="bg-light-blue rounded-full w-8 h-8 flex items-center justify-center"
        >
          <img src="/Socials/LinkedIn.png" alt="linkedIn" class="w-4 h-4" />
        </a>
        <a
          href="https://github.com/amraibra"
          target="_blank"
          class="bg-light-blue rounded-full w-8 h-8 flex items-center justify-center"
        >
          <img src="/Socials/Github.png" alt="GitHub" class="w-5 h-5" />
        </a>
        <a
          href="mailto:i.amra02@live.com"
          class="bg-light-blue rounded-full w-8 h-8 flex items-center justify-center"
        >
          <img src="/Socials/Outlook.png" alt="Outlook" class="w-5 h-5" />
        </a>
      </div>
    </header>
    <main class="flex-1 flex flex-col items-center justify-center p-8">
      <div class="flex flex-row items-center justify-between space-x-16 w-full max-w-screen-xl">
        <section class="flex flex-col items-start">
          <h1 class="text-3xl text-light-blue mb-4">Welcome! I Am</h1>
          <h2 class="text-5xl text-medium-blue">Amra Ibrahimovic</h2>
          <p class="text-lg mt-6 text-light-blue">Web Designer & Development</p>
        </section>
        <div class="flex bg-dark-blue rounded-full w-96 h-96 items-center justify-center">
          <img
            src="/Amra.png"
            alt="Amra"
            class="rounded-full w-96 h-96 border-light-blue border-8"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<script></script>

<style>
.scrollable-container {
  height: 100vh; /* Ensure it takes the full viewport height */
  overflow-y: auto; /* Enable vertical scrolling */
}
</style>