import { IPark } from "./Parks";

export interface ISchedule {
  user_id: string;
  park_id: string;
  id: string;
  status: string;
  total_period_days: number;
  total_value: number;
  from: string;
  to: string;
  park: IPark;
  url?: string;
}
