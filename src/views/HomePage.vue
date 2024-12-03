<template>
  <div
    class="bg-white min-h-screen flex flex-col font-customFont scrollable-container"
  >
    <header
      class="flex justify-between items-center w-full max-w-screen-xl text-black text-xl p-8 pb-5 border-lightest-blue border-b-2 mx-auto"
    >
      <a href="/home" class="text-dark-blue text-2xl font-bold">
        Portfolio 2025
      </a>
      <div class="flex space-x-4">
        <button
          class="bg-light-blue rounded-lg p-3 text-white text-sm hover:bg-lightest-blue"
        >
          Contact
        </button>
        <a
          class="bg-light-blue rounded-lg p-3 text-white text-sm hover:bg-lightest-blue"
          href="/projects"
        >
          Projects
        </a>
        <a
          href="/Resume - Amra Ibrahimovic.pdf"
          target="_blank"
          class="bg-light-blue rounded-lg p-3 text-white text-sm hover:bg-lightest-blue text-center"
        >
          Resume
        </a>
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
      <div
        class="flex flex-row items-center justify-center space-x-20 w-full max-w-screen-xl"
      >
        <section
          class="flex flex-col items-start bg-light-blue border-medium-blue border-4 p-8 rounded-xl break-words w-1/2"
        >
          <h1 class="text-3xl text-white mb-4 font-bold">About Me:</h1>
          <p class="text-md text-white">
            Hi everyone! My name is Amra Ibrahimovic and I am an aspiring web
            developer. I graduated from Southern New Hampshire University in May
            with a bachelors in computer science. I love to spend time with my
            family and friends, travel, read, and play video games. If I were to
            choose two words to describe myself, it would be meticulous and
            inquisitive.
          </p>
        </section>
        <div
          class="flex bg-dark-blue rounded-full w-96 h-96 items-center justify-center"
        >
          <img
            src="/Amra.png"
            alt="Amra"
            class="rounded-full w-96 h-96 border-medium-blue border-8"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<script></script>
