<template>
  <ion-page>
    <div class="bg-white min-h-screen scrollable-container">
      <div class="flex flex-col items-center bg-white font-customFont w-full">
        <header
          class="flex flex-row justify-between items-center w-full max-w-screen-xl text-black text-xl p-8 pb-5 border-lightest-blue border-b-2"
        >
          <a href="/home" class="text-dark-blue text-2xl font-bold"
            >Portfolio 2025</a
          >
          <div class="flex space-x-4">
            <button
              @click="selectedProject = 'CodeExhibit'"
              class="bg-light-blue hover:bg-lightest-blue text-sm transition-all duration-300 transform hover:-translate-y-1 rounded-lg p-3 text-white text-center"
            >
              CodeExhibit
            </button>
            <button
              @click="selectedProject = 'TraceChain'"
              type="button"
              class="bg-light-blue hover:bg-lightest-blue text-sm transition-all duration-300 transform hover:-translate-y-1 rounded-lg p-3 text-white text-center"
            >
              TraceChain
            </button>
            <button
              @click="selectedProject = 'InvolveU'"
              class="bg-light-blue hover:bg-lightest-blue text-sm transition-all duration-300 transform hover:-translate-y-1 rounded-lg p-3 text-white text-center"
            >
              InvolveU
            </button>
          </div>
          <div class="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/amra-ibrahimovic-704791173/"
              class="bg-light-blue hover:bg-lightest-blue text-sm transition-all duration-300 transform hover:-translate-y-1 rounded-full w-8 h-8 text-white text-center flex justify-center items-center"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                src="/Socials/LinkedIn.png"
                alt="linkedIn"
                class="w-4 h-4 inline-block rounded-sm"
              />
            </a>
            <a
              href="https://github.com/amraibra"
              class="bg-light-blue hover:bg-lightest-blue text-sm transition-all duration-300 transform hover:-translate-y-1 rounded-full w-8 h-8 text-white text-center flex justify-center items-center"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                src="/Socials/Github.png"
                alt="GitHub"
                class="w-5 h-5 inline-block rounded-full"
              />
            </a>
            <a
              href="mailto:i.amra02@live.com"
              class="bg-light-blue hover:bg-lightest-blue text-sm transition-all duration-300 transform hover:-translate-y-1 rounded-full w-8 h-8 text-white text-center flex justify-center items-center"
            >
              <img
                src="/Socials/Outlook.png"
                alt="Outlook"
                class="w-5 h-5 inline-block rounded-full"
              />
            </a>
          </div>
        </header>

        <!-- Main -->
        <div class="w-full max-w-screen-xl p-8 pb-20">
          <!--CodeExhibit-->
          <div v-if="selectedProject === 'CodeExhibit'">
            <h2 class="text-2xl font-bold mb-4 text-darkest-blue">
              CodeExhibit
            </h2>
            <p class="text-slate-600">
              CodeExhibit is a web application that allows students to upload
              their projects for other students to view and have access to.
              Students can upload their github repository, add pictures, list
              the tools they utilized, and get inspiration from other projects.
            </p>
            <!--Image Slider-->
            <swiper :slides-per-view="1" navigation pagination class="pt-10">
              <swiper-slide>
                <img
                  src="/CodeExhibit/CeHome.png"
                  alt="CEHome"
                  class="w-full"
                />
              </swiper-slide>
              <swiper-slide>
                <img
                  src="/CodeExhibit/CodeExhibit Projects.png"
                  alt="CEProjects"
                  class="w-full"
                />
              </swiper-slide>
              <swiper-slide>
                <img
                  src="/CodeExhibit/CeForm.png"
                  alt="CEForm"
                  class="w-full"
                />
              </swiper-slide>
            </swiper>
          </div>
          <!--TraceChain-->
          <div v-if="selectedProject === 'TraceChain'">
            <h2 class="text-2xl font-bold mb-4 text-darkest-blue">
              TraceChain
            </h2>
            <p class="text-slate-600">
              TraceChain is a social media application where users can interact
              with posts that are authenticated by sources. Posts highlighted in
              green or red indicate if the user added a source to a post. Of
              course, not every post needs to be authenticated by a source and
              the user can filter their feed and profile any way they would
              like.
            </p>
            <!--Image Slider-->
            <swiper :slides-per-view="1" navigation pagination class="pt-10">
              <swiper-slide>
                <img
                  src="/TraceChain/TcLogin.png"
                  alt="TCLogin"
                  class="w-full"
                />
              </swiper-slide>
              <swiper-slide>
                <img
                  src="/TraceChain/TraceChain Feed.png"
                  alt="TCFeed"
                  class="w-full"
                />
              </swiper-slide>
              <swiper-slide>
                <img src="/TraceChain/TcPost.png" alt="TCPost" class="w-full" />
              </swiper-slide>
              <swiper-slide>
                <img
                  src="/TraceChain/TraceChain Profile.png"
                  alt="TCProfile"
                  class="w-full"
                />
              </swiper-slide>
              <swiper-slide>
                <img
                  src="/TraceChain/TraceChain Account Settings.png"
                  alt="TCSettings"
                  class="w-full"
                />
              </swiper-slide>
            </swiper>
          </div>
          <!--InvolveU-->
          <div v-if="selectedProject === 'InvolveU'">
            <h2 class="text-2xl font-bold mb-4 text-darkest-blue">InvolveU</h2>
            <p class="text-slate-600">
              InvolveU is a one stop shop website for Southern New Hampshire
              University's event center. This website gives students access to
              all current events happening on campus and students can also RSVP
              or add these events to their favoites. This project was already
              built when my team took over and added all the missing pieces
              which include a profile, more calendar features, and major
              security improvements.
            </p>
            <!--Image Slider-->
            <swiper :slides-per-view="1" navigation pagination class="pt-10">
              <swiper-slide>
                <img
                  src="/InvolveU/InvolveU Profile.png"
                  alt="IuProfile"
                  class="w-full"
                />
              </swiper-slide>
              <swiper-slide>
                <img src="/InvolveU/IuHome.png" alt="IuHome" class="w-full" />
              </swiper-slide>
              <swiper-slide>
                <img
                  src="/InvolveU/IuSettings.png"
                  alt="IuSettings"
                  class="w-full"
                />
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </ion-page>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";

export default {
  data() {
    return {
      selectedProject: "CodeExhibit", // Default project to show
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>
