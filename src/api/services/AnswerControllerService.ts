/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnswerRequestDto } from '../models/AnswerRequestDto';
import type { AnswerResponseDto } from '../models/AnswerResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AnswerControllerService {
    /**
     * @param requestBody
     * @returns AnswerResponseDto OK
     * @throws ApiError
     */
    public static checkAnswers(
        requestBody: AnswerRequestDto,
    ): CancelablePromise<AnswerResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/checkanswers',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
