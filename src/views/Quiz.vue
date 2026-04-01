<template>
    <!-- Question card -->
    <v-card class="pa-6 mb-6">
        <p class="mb-6">{{ htmlDecode(question.question) }}</p>

        <v-row>
            <v-col v-for="(choice, index) in question.answers" :key="index" cols="12" sm="6">
                <v-btn id="answer-btn" class="w-100 h-100" 
                    :variant="selectedIndex == index ? 'flat' : 'outlined'"
                    :color="selectedIndex === index ? 'primary' : undefined" 
                    @click="selectAnswer(index)">
                    {{ htmlDecode(choice) }}
                </v-btn>
            </v-col>
        </v-row>
    </v-card>

    <!-- Navigation part -->
    <v-row justify="space-between" >
        <v-btn color="secondary" 
            :disabled="questionIndex === 0" 
            @click="previousQuestion"
            :prepend-icon="mdiChevronLeft"
            >
            Previous</v-btn>
        <v-spacer />
        <v-btn 
            v-if="questionIndex < questions.length - 1" 
            :disabled="selectedIndex === null"
            color="primary"  
            @click="nextQuestion"
            :append-icon="mdiChevronRight"
            >
            Next</v-btn>
        <v-btn 
            v-else 
            :disabled="selectedIndex === null"
            color="primary" @click="promptSubmitAnswers">Submit</v-btn>
    </v-row>

    <!-- Submit conformation dialog -->
    <v-dialog v-model="showSubmitDialog" max-width="400">
    <v-card
      title="Submit answers?"
      text="Do you want to submit your answers?"
    >
      <template v-slot:actions>
        <v-spacer />
        <v-btn @click="showSubmitDialog = false">Cancel</v-btn>
        <v-btn color="primary" variant="flat" @click="submitAnswers">Submit</v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { questions, answers, submitAnswers } from '@/store/quizManager'
import { htmlDecode } from '@/util/htmlDecoder'
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js'

const questionIndex = ref(0)
const question = ref(questions.value[questionIndex.value])
const selectedIndex = ref<number | null>(null)
const showSubmitDialog = ref(false)

function selectAnswer(index: number) {
    selectedIndex.value = index
    answers.value[questionIndex.value] = { questionId: question.value.id, selectedIndex: selectedIndex.value }
}

function previousQuestion() {
    if (questionIndex.value > 0) {
        questionIndex.value--
        question.value = questions.value[questionIndex.value]
        selectedIndex.value = answers.value[questionIndex.value]?.selectedIndex ?? null
    }
}

function nextQuestion() {
    if (selectedIndex.value === null) return // Should not happend, but typescript needs to be sure

    if (questionIndex.value < questions.value.length - 1) {
        questionIndex.value++
        question.value = questions.value[questionIndex.value]
        selectedIndex.value = answers.value[questionIndex.value]?.selectedIndex ?? null
    } else {
        promptSubmitAnswers()
    }
}

function promptSubmitAnswers() {
    // Sanity check: all questions answered
    if (answers.value.some(answer => answer?.selectedIndex === null)) {
        alert("Please answer all questions before submitting.")
        return
    }
    showSubmitDialog.value = true
}

</script>