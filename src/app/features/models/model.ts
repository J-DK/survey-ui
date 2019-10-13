export interface Question {
  id: number;
  title: string;
  type: QuestionType;
  optionalValues : string[];
}


export interface Survey {
  id?: number
  userId: string;
  name: string;
  questionnaire: Question[];
}

export type QuestionType = "singleLine" | "multiLine" | "dropdown" | "select" | "radio";

export interface FeedBack {
  surveyId: number;
  surveyedBy: string;
  author: string;
  surveyName: string;
  answers: Answer[]
}

export interface Answer {
  questionNo: number;
  question: string;
  questionType: string;
  value: string | string[];
}

export interface SignupUser {
  firstName: String;
  lastName: String;
  email: String;
  password: String;
}

export interface LoginUser {
  email: String;
  password: String;
}