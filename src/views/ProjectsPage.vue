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
              @click="selectedProject = 'CodeExhibit'"
              class="bg-light-blue rounded-lg p-3 text-white text-sm text-center hover:bg-lightest-blue"
            >
              CodeExhibit
            </button>
            <button
              @click="selectedProject = 'TraceChain'"
              type="button"
              class="bg-light-blue rounded-lg p-3 text-white text-sm text-center hover:bg-lightest-blue"
            >
              TraceChain
            </button>
            <button
              @click="selectedProject = 'InvolveU'"
              class="bg-light-blue rounded-lg p-3 text-white text-sm text-center hover:bg-lightest-blue"
            >
              InvolveU
            </button>
          </div>
          <div class="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/amra-ibrahimovic-704791173/"
              class="bg-light-blue rounded-full w-8 h-8 text-white text-sm text-center flex justify-center items-center"
              target="_blank"
              rel="noreferrer noopener"
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
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                src="/Github.png"
                alt="GitHub"
                class="w-5 h-5 inline-block rounded-full"
              />
            </a>
            <a
              href="mailto:i.amra02@live.com"
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

        <!-- Project Content -->
        <main class="w-full max-w-screen-xl p-8 text-black">
          <div v-if="selectedProject === 'CodeExhibit'">
            <h2 class="text-2xl font-bold mb-4">CodeExhibit</h2>
            <p>
              CodeExhibit is a web application that allows students to upload
              their projects for other students to view and have access to.
              Students can upload their github repository, add pictures, list
              the tools they utilized, and get inspiration from other projects.
            </p>
          </div>
          <div v-if="selectedProject === 'TraceChain'">
            <h2 class="text-2xl font-bold mb-4">TraceChain</h2>
            <p>
              TraceChain is a social media application where users can interact
              with posts that are authenticated by sources. Posts highlighted in
              green or red indicate if the user added a source to a post. Of
              course, not every post needs to be authenticated by a source and
              the user can filter their feed and profile any way they would
              like.
            </p>
          </div>
          <div v-if="selectedProject === 'InvolveU'">
            <h2 class="text-2xl font-bold mb-4">InvolveU</h2>
            <p>
              InvolveU is a one stop shop website for Southern New Hampshire
              University's event center. This website gives students access to
              all current events happening on campus and students can also RSVP
              or add these events to their favoites. This project was already
              built when my team took over and added all the missing pieces
              which include a profile, more calendar features, and major
              security improvements.
            </p>
          </div>
        </main>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
export default {
  data() {
    return {
      selectedProject: "CodeExhibit", // Default project to show
    };
  },
};
</script>
