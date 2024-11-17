<template>
  <ion-page>
    <ion-content class="bg-white min-h-screen">
      <div class="flex h-full flex-col items-center bg-white font-customFont">
        <header
          class="flex flex-row justify-between items-center w-full max-w-screen-xl text-black text-xl p-8 pb-5 border-lightest-blue border-b-2"
        >
          <a href="/home" class="text-dark-blue text-2xl font-bold"
            >Portfolio 2025</a
          >
          <div class="flex space-x-4">
            <button
              class="bg-light-blue rounded-lg p-3 text-white text-sm text-center hover:bg-lightest-blue"
            >
              CodeExhibit
            </button>
            <button
              type="button"
              class="bg-light-blue rounded-lg p-3 text-white text-sm text-center hover:bg-lightest-blue"
            >
              TraceChain
            </button>
            <button
              class="bg-light-blue rounded-lg p-3 text-white text-sm text-center hover:bg-lightest-blue"
            >
             InvolveU
            </button>
          </div>
          <div class="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/amra-ibrahimovic-704791173/"
              class="bg-light-blue rounded-full w-8 h-8 text-white text-sm text-center flex justify-center items-center"
            >
              <img
                src="/LinkedIn.png"
                alt="linkedIn"
                class="w-4 h-4 inline-block rounded-sm"
              />
            </a>
            <a
              href="https://github.com/amraibra"
              class="bg-light-blue rounded-full w-8 h-8 text-white text-sm text-center flex justify-center items-center"
            >
              <img
                src="/Github.png"
                alt="GitHub"
                class="w-5 h-5 inline-block rounded-full"
              />
            </a>
            <a
              href="https://github.com/amraibra"
              class="bg-light-blue rounded-full w-8 h-8 text-white text-sm text-center flex justify-center items-center"
            >
              <img
                src="/Outlook.png"
                alt="Outlook"
                class="w-5 h-5 inline-block rounded-full"
              />
            </a>
          </div>
        </header>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
export default {
  methods: {
    toProjectsPage() {
      window.location.href = "/projects";
    },
  },
};
</script>
