import { departments, jobTitles } from "./constants";

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  jobTitle: string;
  department: string;
  interests: string;
  phoneNumber: string;
  location: string;
  picture: string;
}

export type Department = typeof departments[string];
export type JobTitle = typeof jobTitles[string];
