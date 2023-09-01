import { HistoryMessage } from '../message';

export interface ApproachResponse {
  data_points: string[];
  answer: string;
  thoughts: string;
}

export interface ChatApproach {
  run(history: HistoryMessage[], overrides: Record<string, any>): Promise<ApproachResponse>;
}

export interface AskApproach {
  run(q: string, overrides: Record<string, any>): Promise<ApproachResponse>;
}