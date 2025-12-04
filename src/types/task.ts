export type TaskStatus = 'pending'  | 'completed' | string;

export interface Task {
  id: string; // uuid 
  task: string;
  status: TaskStatus;
  created_at: string;  // ISO string from Supabase
  updated_at: string;  // ISO string from Supabase
}
