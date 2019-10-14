export interface Question {
  questionNo: number;
  title: string;
  type: QuestionType;
  optionalValues : string[];
}


export interface Survey {
  id?: string
  emailId: string;
  surveyName: string;
  questionnaire: Question[];
}

export type QuestionType = "singleLine" | "multiLine" | "dropdown" | "select" | "radio";

export interface FeedBack {
  surveyId: string;
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