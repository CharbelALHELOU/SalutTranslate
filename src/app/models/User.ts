export interface User {
  _id: string;
  role: number;
  name: string;
  age: string;
  email: string;
  major : string;
  university : string;
  password: string;
  resumeUrl: string;
  foundMentors: number;
  mentors?: string[];
}
