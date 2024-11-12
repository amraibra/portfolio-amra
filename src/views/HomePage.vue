<template>
  <ion-page>
    <ion-content class="bg-white min-h-screen">
      <div class="flex h-full flex-col items-center bg-white">
        <header
          class="flex flex-row justify-between items-center w-full max-w-screen-xl text-black text-xl p-8 pb-5 border-gray-green border-b-2"
        >
          <div>Portfolio 2025</div>
          <div class="flex space-x-4">
            <div
              class="bg-sage-green rounded-lg p-3 text-white text-sm text-center"
            >
              Contact
            </div>
            <div
              class="bg-sage-green rounded-lg p-3 text-white text-sm text-center"
            >
              Projects
            </div>
            <div
              class="bg-sage-green rounded-lg p-3 text-white text-sm text-center"
            >
              Resume
            </div>
          </div>
          <div class="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/amra-ibrahimovic-704791173/"
              class="bg-sage-green rounded-full w-8 h-8 text-white text-sm text-center flex justify-center items-center"
            >
              <img
                src="/LinkedIn.png"
                alt="linkedIn"
                class="w-4 h-4 inline-block rounded-full"
              />
            </a>
            <a
              href="https://github.com/amraibra"
              class="bg-sage-green rounded-full w-8 h-8 text-white text-sm text-center flex justify-center items-center"
            >
              <img
                src="/Github.png"
                alt="GitHub"
                class="w-5 h-5 inline-block rounded-full"
              />
            </a>
          </div>
        </header>
        <div
          class="flex flex-row items-center justify-between mt-20 space-x-64"
        >
          <section class="flex flex-col items-start">
            <h1 class="text-3xl font-sans text-gray-green mb-4">
              Welcome! I Am
            </h1>
            <h2 class="text-5xl font-sans text-sage-green">Amra Ibrahimovic</h2>
            <p class="text-lg mt-6 text-gray-green">
              Web Designer & Development
            </p>
          </section>
          <div
            class="flex bg-sage-green rounded-full w-96 h-96 flex-shrink-0 justify-center items-center"
          >
            <img
              src="/Amra.png"
              alt="Amra"
              class="rounded-full w-96 h-96 border-sage-green border-8"
            />
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts"></script>
