import apiInstance from "../..";
import { IApiSuccess } from "../../../utils/Types";
import { ApiEndPoints, IPaginationList } from "../../../utils/constants";
import { IQuizListResponse } from "./types";

export const quizAPI = {
  async generateQuiz(): Promise<IApiSuccess<Record<string, string>>> {
    return apiInstance
      .post(ApiEndPoints.quiz.startQuiz)
      .then((response) => response)
      .catch((err) => {
        throw err?.response?.data;
      });
  },

  async getMyQuiz(
    data: IPaginationList
  ): Promise<IApiSuccess<IQuizListResponse>> {
    return apiInstance
      .post(ApiEndPoints.quiz.myQuiz, data)
      .then((response) => response)
      .catch((err) => {
        throw err?.response?.data;
      });
  },
};
