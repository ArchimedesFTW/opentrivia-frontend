/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QuestionResponseDto } from '../models/QuestionResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class QuestionControllerService {
    /**
     * @param amount
     * @returns QuestionResponseDto OK
     * @throws ApiError
     */
    public static getQuestions(
        amount: number,
    ): CancelablePromise<QuestionResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/questions',
            query: {
                'amount': amount,
            },
        });
    }
}
