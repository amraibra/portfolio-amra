<template>
  <div
    class="bg-white min-h-screen flex flex-col font-customFont scrollable-container"
  >
    <header
      class="flex justify-between items-center w-full max-w-screen-xl text-black text-xl p-8 pb-5 border-lightest-blue border-b-2 mx-auto"
    >
      <a href="/home" class="text-darkest-blue text-2xl font-bold">
        Portfolio 2025
      </a>
      <div class="flex space-x-4">
        <a
          class="bg-light-blue hover:bg-lightest-blue text-sm transition-all duration-300 transform hover:-translate-y-1 rounded-lg p-3 text-white"
          href="/home"
        >
          About Me
        </a>
        <a
          class="bg-light-blue hover:bg-lightest-blue text-sm transition-all duration-300 transform hover:-translate-y-1 rounded-lg p-3 text-white"
          href="/projects"
        >
          Projects
        </a>
        <a
          href="/Resume - Amra Ibrahimovic.pdf"
          target="_blank"
          class="bg-light-blue hover:bg-lightest-blue text-sm transition-all duration-300 transform hover:-translate-y-1 rounded-lg p-3 text-white"
        >
          Resume
        </a>
      </div>
      <div class="flex space-x-4">
        <a
          href="https://www.linkedin.com/in/amra-ibrahimovic-704791173/"
          target="_blank"
          class="bg-light-blue hover:bg-lightest-blue text-sm transition-all duration-300 transform hover:-translate-y-1 rounded-full w-8 h-8 flex items-center justify-center"
        >
          <img src="/Socials/LinkedIn.png" alt="linkedIn" class="w-4 h-4" />
        </a>
        <a
          href="https://github.com/amraibra"
          target="_blank"
          class="bg-light-blue hover:bg-lightest-blue text-sm transition-all duration-300 transform hover:-translate-y-1 rounded-full w-8 h-8 flex items-center justify-center"
        >
          <img src="/Socials/Github.png" alt="GitHub" class="w-5 h-5" />
        </a>
        <a
          href="mailto:i.amra02@live.com?subject=Portfolio%20Interest"
          class="bg-light-blue rounded-full hover:bg-lightest-blue text-sm transition-all duration-300 transform hover:-translate-y-1 w-8 h-8 flex items-center justify-center"
        >
          <img src="/Socials/Outlook.png" alt="Outlook" class="w-5 h-5" />
        </a>
      </div>
    </header>
    <!-- Main Content -->
    <main class="flex-1 flex items-center justify-center px-8">
      <div
        class="flex flex-col md:flex-row items-center md:items-start xl:space-x-20 w-full max-w-screen-xl gap-8"
      >
        <!-- Image Section -->
        <div
          class="ml-10 w-auto h-auto max-w-[525px] max-h-[525px] rounded-xl overflow-hidden shadow-2xl shadow-slate-700 transform scale-100 hover:scale-105 transition-all duration-500"
        >
          <img
            src="/Amra.png"
            alt="Amra Ibrahimovic"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Text Section -->
        <section
          class="flex flex-col self-center text-left max-w-xl space-y-10"
        >
          <h1
            class="text-5xl md:text-4xl font-semibold text-dark-blue leading-loose"
          >
            Welcome! I am Amra, aspiring web developer located in Manchester,
            New Hampshire.
          </h1>
          <p class="text-md text-slate-600 leading-loose">
            I graduated from Southern New Hampshire University with a Bachelor's
            in Computer Science. During my time at university, I took the time
            to teach myself front-end development. With the opportunity, I was
            able to learn many different languages, frameworks, APIs, and more.
            Now I am looking to expand my knowledge and gain the experience I
            need to be a better developer.
          </p>
          <p class="text-md text-slate-600 leading-loose">
            Outside of school and work, I cherish family and relationships the
            most in my life. I enjoy reading, traveling, learning new recipes,
            and playing all sorts of video games. If I were to choose two words
            to describe myself, they would be
            <span class="font-bold text-darkest-blue">meticulous</span> and
            <span class="font-bold text-darkest-blue">inquisitive</span>.
          </p>
        </section>
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
