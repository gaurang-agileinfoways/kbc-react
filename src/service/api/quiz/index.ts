import apiInstance from "../..";
import { ApiEndPoints } from "../../../utils/constants";

export const quizAPI = {
  async generateQuiz() {
    return apiInstance
      .post(ApiEndPoints.quiz.startQuiz)
      .then((response) => response)
      .catch((err) => {
        console.log("err: ", err);
        throw err?.response?.data;
      });
  },
};
