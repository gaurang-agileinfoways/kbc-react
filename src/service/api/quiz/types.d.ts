export interface IQuizListResponse {
  quiz: Array<Data>;
  total_records: number;
}

export interface IQuizLisData {
  _id: string;
  userId: number;
  status: string;
  winAmount: number;
  currentLevel: number;
  questions: IQuestion[];
  createdAt: string;
}

interface IQuestion {
  questionId: string;
  questionStatus: string;
  _id: string;
}
