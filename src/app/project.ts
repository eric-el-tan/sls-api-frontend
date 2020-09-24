export interface Project {
  id: number;
  createdAt: number;
  title: string;
  startDate: number;
  principalInvestigator: string;
  faculty: string;
  funder: string;
  funderRound: string;
  value: string;
  imageUrl: string;
  budgets: string[];
}
