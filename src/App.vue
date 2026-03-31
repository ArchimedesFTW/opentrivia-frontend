<template>
  <v-app>
    <v-app-bar elevation="0" color="transparent" class="pa-3" style="max-height: 25vh;">

      <v-img src="./assets/OpenTriviaQuizLogoSoft.svg" alt="Logo" width="240" max-height="100%" contain
        class="mx-auto align-self-center" />

      <!-- Actual visible icons -->
      <v-btn icon="mdi-github" href="https://github.com/ArchimedesFTW/opentrivia-frontend" target="_blank" />
      <v-btn icon="mdi-theme-light-dark" @click="$vuetify.theme.cycle()" />
    </v-app-bar>

    <v-main class="my-3">
      <!-- https://app.studyraid.com/en/read/12385/399956/containers-and-their-behavior -->
      <v-container fluid class="py-6 py-sm-10 py-md-16" style="max-width: 80em;"> <!-- Padding for different screen sizes -->
        <Start v-if="currentView === View.Start" />
        <Quiz v-else-if="currentView === View.Quiz" />
        <Results v-else />
      </v-container>
    </v-main>
  </v-app>

  <v-snackbar :model-value="!!error" color="error" @update:model-value="error = null">
    {{ error }}
  </v-snackbar>
</template>

<script lang="ts" setup>
import { currentView, View, error } from '@/store/quizManager'
import Start from './views/Start.vue';
import Quiz from './views/Quiz.vue';
import Results from './views/Results.vue';
</script>
