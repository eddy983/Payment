export interface AuthData {
  user: User;
  today: string;
  staffPerformance: StaffPerformance;
  downloads: Downloads;
  target: Target;
}
export interface User {
  name: string;
  email: string;
}

export interface CustomerCount {
  all_customers: number;
  new_customers: number;
  active_customers: number;
  Inactive_customers: number;
  churn_customers: number;
}

export interface StaffPerformance {
  labels: string[];
  values: Record<string, number[]>;
}

export interface Downloads {
  total: number;
  completeSignups: number;
  incompleteSignups: number;
}
export interface Target {
  complete: number;
  required: number;
}

export type AuthState = {
  isAuthenticated: boolean;
  user: User | null;
  isLoading: boolean;
};

export type AuthAction =
  | { type: 'LOGIN'; payload: User }
  | { type: 'LOGOUT' }
  | { type: 'STOP_LOADING' };

export type AuthDispatch = React.Dispatch<AuthAction> | null;

export type LoginDto = {
  email: string;
  password: string;
};
