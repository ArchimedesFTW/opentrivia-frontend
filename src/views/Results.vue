<template>
    <v-card class="d-flex flex-column h-100">

        <!-- Top: always visible -->
        <v-card-title class="pa-6 pb-2" style="white-space: normal">
            <p>Answered {{ correct }} out of {{ solutions.length }} correctly.</p>
        </v-card-title>

        <v-divider />

        <v-card-text style="flex: 1; overflow-y: auto; max-height: 66vh;">
            <v-card v-for="solution, index in solutions" :key="index" class="pa-6 mb-6">
                <p class="mb-6">{{ htmlDecode(solution.question.question) }}</p>

                <v-row>
                    <v-col v-for="(choice, index) in solution.question.answers" :key="index" cols="12" sm="6">
                        <v-btn id="answer-btn" class="w-100 h-100"
                            :variant="solution.selectedIndex == index ? 'flat' : 'outlined'"
                            :color="getColor(solution, index)"
                            readonly >
                            {{ htmlDecode(choice) }}
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card>
        </v-card-text>

        <v-divider />

        <v-card-actions>
            <v-spacer />
            <v-btn color="primary" variant="flat" @click="restart">Restart</v-btn>
        </v-card-actions>
    </v-card>


</template>

<script setup lang="ts">
import { computed } from 'vue'
import { solutions, restart } from '@/store/quizManager'
import { htmlDecode } from '@/util/htmlDecoder'

const correct = computed(() => solutions.value.filter(solution => solution.selectedIndex === solution.correctIndex).length)

// Filled in color for correct (and wrong answer)
// Outline to indicate correct, not provided answer.
function getColor(solution: typeof solutions.value[0], index: number) {
    if (index === solution.correctIndex) {
        return 'success'
    } else if (index === solution.selectedIndex) {
        return 'error'
    } else {
        return undefined
    }
}
</script>