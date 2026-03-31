import { ref, computed } from 'vue'
import { type AnswerResponseDto, QuestionControllerService, type QuestionDto, type SolutionDto, type AnswerDto, AnswerControllerService, type AnswerRequestDto, ApiError } from '@/api'

export enum View {
    Start = 'start',
    Quiz = 'quiz',
    Results = 'results',
}

// All references that will be shared among the views
export const currentView = ref<View>(View.Start)
export const questions = ref<QuestionDto[]>([])
export const answers = ref<AnswerDto[]>([])
export const solutions = ref<SolutionDto[]>([])
export const isFetching = ref<boolean>(false)
export const error = ref<string | null>(null)

export async function startQuiz(amount: number) {
    isFetching.value = true; // Set spinning loader
    try {
        questions.value = (await QuestionControllerService.getQuestions(amount)).questions;
        isFetching.value = false;

        // Reset answers and change view
        answers.value = []
        currentView.value = View.Quiz;
    } catch (e: Error | ApiError | unknown) {
        error.value = (e as Error)?.message ?? "Unknown error occurred";
        isFetching.value = false;
    }
}

export async function submitAnswers() {
    // Wrap answers to RequestDto
    const request = { "answers": answers.value } as AnswerRequestDto

    isFetching.value = true; // Set spinning loader
    try {
        solutions.value = (await AnswerControllerService.checkAnswers(request)).solutions;
        isFetching.value = false;
        currentView.value = View.Results;
        // Print exception if something went wrong
    } catch (e: Error | ApiError | unknown) {
        error.value = (e as Error)?.message ?? "Unknown error occurred";
        isFetching.value = false;
    }
}

export async function restart() {
    questions.value = []
    answers.value = []
    solutions.value = []
    currentView.value = View.Start
}