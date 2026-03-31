<template>
  <v-card class="d-flex flex-column h-100 pa-6">
    <p class="text-title-large mb-2">Test your trivia knowledge!</p>
    
    <p class="text-label-small text-medium-emphasis mb-6">
      Powered by the 
      <a href="https://opentdb.com" target="_blank">Open Trivia Database</a>
    </p>

    <v-select
      v-model="amount"
      :items="[1, 5, 10, 20]"
      label="Number of questions"
      class="mx-left"
      style="max-width: 16em"
    />

    <v-btn color="primary" size="large" :loading="isFetching" @click="startQuiz(amount)">
      Start
    </v-btn>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { startQuiz, isFetching } from '@/store/quizManager'

const amount = ref(10)
</script>