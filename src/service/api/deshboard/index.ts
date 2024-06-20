import apiInstance from "../..";
import { IApiSuccess } from "../../../utils/Types";
import { ApiEndPoints } from "../../../utils/constants";

export const deshboardAPI = {
  async getRankedPlayer(): Promise<IApiSuccess<Record<string, string>>> {
    return apiInstance
      .post(ApiEndPoints.quiz.rankedPlayer)
      .then((response) => response)
      .catch((err) => {
        throw err?.response?.data;
      });
  },
};
